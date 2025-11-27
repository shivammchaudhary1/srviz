import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./slices/notificationSlice.js";
import authReducer from "./slices/authSlice.js";
import leadReducer from "./slices/leadSlice.js";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
    lead: leadReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["notification/showNotification"],
      },
    }),
});
