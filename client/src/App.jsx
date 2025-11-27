import React from "react";
import AllRoutes from "./appRoutes/AllRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <AllRoutes />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
          // Default options for specific types
          success: {
            duration: 4000,
            iconTheme: {
              primary: "#10B981",
              secondary: "#ffffff",
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: "#EF4444",
              secondary: "#ffffff",
            },
          },
          loading: {
            duration: Infinity,
          },
        }}
      />
    </div>
  );
};

export default App;
