import { store } from "../redux/store";
import {
  showNotification,
  clearNotifications as clearNotificationsAction,
} from "../redux/slices/notificationSlice";

export const notify = ({ message, status = "info" }) => {
  store.dispatch(showNotification({ message, status }));
};

// Convenience functions for specific notification types
export const notifySuccess = (message) =>
  notify({ message, status: "success" });
export const notifyError = (message) => notify({ message, status: "error" });
export const notifyInfo = (message) => notify({ message, status: "info" });
export const notifyWarning = (message) =>
  notify({ message, status: "warning" });

// Clear all notifications
export const clearNotifications = () => {
  store.dispatch(clearNotificationsAction());
};
