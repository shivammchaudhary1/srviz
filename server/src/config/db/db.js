import mongoose from "mongoose";
import { config } from "../envs/env.js";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
