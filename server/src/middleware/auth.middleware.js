import { verifyJWT, extractTokenFromHeader } from "../config/libraries/jwt.js";

export const protect = async (req, res, next) => {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please provide a valid token.",
      });
    }

    const decoded = verifyJWT(token);
    req.user = decoded;
    next();
  } catch (error) {
    const isExpired = error.message.includes("expired");

    return res.status(401).json({
      success: false,
      message: error.message,
      ...(isExpired && { isExpired: true }),
    });
  }
};

export const adminOnly = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login first.",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error verifying admin access.",
    });
  }
};
