import express from "express";
const leadRouter = express.Router();
import { createLead, getAllLeads } from "../controllers/lead.controller.js";

// Route to create a new lead
leadRouter.post("/add", createLead);
leadRouter.get("/getall", getAllLeads);

export default leadRouter;
