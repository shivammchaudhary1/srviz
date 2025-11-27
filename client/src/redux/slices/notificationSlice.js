import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
  },
  reducers: {
    showNotification: (state, action) => {
      const { message, status } = action.payload;

      // Add to state for tracking if needed
      state.notifications.push({
        id: Date.now(),
        message,
        status,
        timestamp: new Date().toISOString(),
      });

      // Show toast notification
      if (status === "success") {
        toast.success(message, {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#10B981",
            color: "#ffffff",
          },
        });
      } else if (status === "error") {
        toast.error(message, {
          duration: 5000,
          position: "top-right",
          style: {
            background: "#EF4444",
            color: "#ffffff",
          },
        });
      } else if (status === "info") {
        toast(message, {
          duration: 4000,
          position: "top-right",
          icon: "ℹ️",
          style: {
            background: "#3B82F6",
            color: "#ffffff",
          },
        });
      } else if (status === "warning") {
        toast(message, {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#F59E0B",
            color: "#ffffff",
          },
        });
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
      toast.dismiss(); // Clear all toasts
    },
  },
});

export const { showNotification, clearNotifications } =
  notificationSlice.actions;
export default notificationSlice.reducer;
