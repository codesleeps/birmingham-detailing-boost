import express, { Response } from "express";
import { z } from "zod";
import prisma from "../lib/prisma";
import {
  authenticate,
  authorize,
  AuthenticatedRequest,
} from "../middleware/auth";

const router = express.Router();

// Validation schemas
const addCompetitorSchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  website: z.string().url().optional(),
  location: z.string().min(3, "Location must be at least 3 characters"),
  services: z.array(z.string()).min(1, "At least one service is required"),
  priceRange: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
});

const updateMonitoringSchema = z.object({
  priceChanges: z.string().optional(),
  newServices: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
  notes: z.string().optional(),
});

// @route   GET /api/competitors
// @desc    Get all competitors in West Midlands
// @access  Private (Admin)
router.get(
  "/",
  authenticate,
  authorize("ADMIN", "STAFF"),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const competitors = await prisma.competitor.findMany({
        where: { isActive: true },
        include: {
          monitoring: {
            orderBy: { checkDate: "desc" },
            take: 5, // Last 5 monitoring entries
          },
        },
        orderBy: { name: "asc" },
      });

      res.status(200).json({
        status: "success",
        data: { competitors },
      });
    } catch (error) {
      console.error("Get competitors error:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
);

// @route   POST /api/competitors
// @desc    Add new competitor
// @access  Private (Admin)
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const validatedData = addCompetitorSchema.parse(req.body);

      const competitor = await prisma.competitor.create({
        data: validatedData,
      });

      res.status(201).json({
        status: "success",
        message: "Competitor added successfully",
        data: { competitor },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation failed",
          errors: error.issues,
        });
      }

      console.error("Add competitor error:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
);

// @route   PUT /api/competitors/:id
// @desc    Update competitor information
// @access  Private (Admin)
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { id } = req.params;
      const validatedData = addCompetitorSchema.partial().parse(req.body);

      const competitor = await prisma.competitor.update({
        where: { id },
        data: validatedData,
      });

      res.status(200).json({
        status: "success",
        message: "Competitor updated successfully",
        data: { competitor },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation failed",
          errors: error.issues,
        });
      }

      console.error("Update competitor error:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
);

// @route   POST /api/competitors/:id/monitoring
// @desc    Add monitoring data for competitor
// @access  Private (Admin/Staff)
router.post(
  "/:id/monitoring",
  authenticate,
  authorize("ADMIN", "STAFF"),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { id } = req.params;
      const validatedData = updateMonitoringSchema.parse(req.body);

      // Check if competitor exists
      const competitor = await prisma.competitor.findUnique({
        where: { id },
      });

      if (!competitor) {
        return res.status(404).json({
          status: "error",
          message: "Competitor not found",
        });
      }

      const monitoring = await prisma.competitorMonitoring.create({
        data: {
          competitorId: id,
          ...validatedData,
        },
      });

      res.status(201).json({
        status: "success",
        message: "Monitoring data added successfully",
        data: { monitoring },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation failed",
          errors: error.issues,
        });
      }

      console.error("Add monitoring error:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
);

// @route   GET /api/competitors/:id/monitoring
// @desc    Get monitoring history for competitor
// @access  Private (Admin/Staff)
router.get(
  "/:id/monitoring",
  authenticate,
  authorize("ADMIN", "STAFF"),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { id } = req.params;
      const { limit = "30" } = req.query;

      const monitoring = await prisma.competitorMonitoring.findMany({
        where: { competitorId: id },
        orderBy: { checkDate: "desc" },
        take: parseInt(limit as string),
        include: {
          competitor: {
            select: { name: true, location: true },
          },
        },
      });

      res.status(200).json({
        status: "success",
        data: { monitoring },
      });
    } catch (error) {
      console.error("Get monitoring error:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
);

// @route   GET /api/competitors/analytics
// @desc    Get competitor analytics for West Midlands
// @access  Private (Admin/Staff)
router.get(
  "/analytics",
  authenticate,
  authorize("ADMIN", "STAFF"),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      // Get competitor count by location
      const locationStats = await prisma.competitor.groupBy({
        by: ["location"],
        where: { isActive: true },
        _count: { id: true },
      });

      // Get average ratings
      const ratingStats = await prisma.competitor.aggregate({
        where: {
          isActive: true,
          rating: { not: null },
        },
        _avg: { rating: true },
        _count: { rating: true },
      });

      // Get recent monitoring activities
      const recentMonitoring = await prisma.competitorMonitoring.count({
        where: {
          checkDate: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      });

      res.status(200).json({
        status: "success",
        data: {
          locationStats,
          averageRating: ratingStats._avg.rating,
          totalRatedCompetitors: ratingStats._count.rating,
          recentMonitoringCount: recentMonitoring,
        },
      });
    } catch (error) {
      console.error("Get analytics error:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
);

export default router;
