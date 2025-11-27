import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/config";

// Helper function to get initial auth state from localStorage
const getInitialAuthState = () => {
  const token = localStorage.getItem("srviz-token");
  const role = localStorage.getItem("srviz-role");
  const userName = localStorage.getItem("srviz-userName");

  // Check if user is authenticated based on presence of token
  const isAuthenticated = Boolean(token && role);

  return {
    token: token || null,
    role: role || null,
    userName: userName || null,
    isAuthenticated,
  };
};

const initialState = getInitialAuthState();

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${config.BACKEND_API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${config.BACKEND_API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload.data.token;
      state.role = action.payload.data.user.role;
      state.userName = action.payload.data.user.name;
      state.isAuthenticated = true;
      localStorage.setItem("srviz-token", action.payload.data.token);
      localStorage.setItem("srviz-role", action.payload.data.user.role);
      localStorage.setItem("srviz-userName", action.payload.data.user.name);
    },
    setLogout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.userName = null;
      localStorage.removeItem("srviz-token");
      localStorage.removeItem("srviz-role");
      localStorage.removeItem("srviz-userName");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Handle successful registration if needed

      console.log("Registration successful:", action.payload);
      state.isAuthenticated = true;
      state.token = action.payload.data.token;
      state.role = action.payload.data.user.role;
      state.userName = action.payload.data.user.name;
      localStorage.setItem("srviz-token", action.payload.data.token);
      localStorage.setItem("srviz-role", action.payload.data.user.role);
      localStorage.setItem("srviz-userName", action.payload.data.user.name);
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.data.token;
      state.role = action.payload.data.user.role;
      state.userName = action.payload.data.user.name;
      localStorage.setItem("srviz-token", action.payload.data.token);
      localStorage.setItem("srviz-role", action.payload.data.user.role);
      localStorage.setItem("srviz-userName", action.payload.data.user.name);
    });
  },
});

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserRole = (state) => state.auth.role;
export const selectUserName = (state) => state.auth.userName;
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
