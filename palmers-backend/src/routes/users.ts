import express, { Request, Response } from "express";
const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get("/profile", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "User profile endpoint - Coming soon!",
    data: null,
  });
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put("/profile", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Update profile endpoint - Coming soon!",
    data: null,
  });
});

export default router;
