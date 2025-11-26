import authRoutes from "./auth.routes.js";
import leadRouter from "./lead.routes.js";

export const mainRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/leads", leadRouter);
};
