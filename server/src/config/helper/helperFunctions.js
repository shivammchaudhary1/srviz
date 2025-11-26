// Helper function to sanitize user data (remove password)
export const sanitizeUser = (user) => {
  const userObj = user.toObject ? user.toObject() : user;
  const { password, ...sanitizedUser } = userObj;
  return sanitizedUser;
};

// Validation helper
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
