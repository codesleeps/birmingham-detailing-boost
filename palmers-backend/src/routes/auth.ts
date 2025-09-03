import express, { Request, Response } from "express";
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post("/register", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Register endpoint - Coming soon!",
    data: null,
  });
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Login endpoint - Coming soon!",
    data: null,
  });
});

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post("/logout", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Logout endpoint - Coming soon!",
    data: null,
  });
});

export default router;
