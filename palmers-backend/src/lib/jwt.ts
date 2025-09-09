import jwt from "jsonwebtoken";
import { Response } from "express";

interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

class JWTUtils {
  private static secret = process.env.JWT_SECRET || "fallback-secret-key";
  private static expiresIn = process.env.JWT_EXPIRES_IN || "7d";

  /**
   * Generate JWT token
   */
  static generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.secret, {
      expiresIn: this.expiresIn,
    });
  }

  /**
   * Verify JWT token
   */
  static verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, this.secret) as JWTPayload;
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }

  /**
   * Generate token and set HTTP-only cookie
   */
  static generateTokenAndSetCookie(res: Response, payload: JWTPayload): string {
    const token = this.generateToken(payload);

    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return token;
  }

  /**
   * Clear authentication cookie
   */
  static clearAuthCookie(res: Response): void {
    res.clearCookie("auth-token");
  }

  /**
   * Extract token from request headers or cookies
   */
  static extractTokenFromRequest(req: any): string | null {
    // Check Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      return authHeader.substring(7);
    }

    // Check cookies
    if (req.cookies && req.cookies["auth-token"]) {
      return req.cookies["auth-token"];
    }

    return null;
  }
}

export default JWTUtils;
