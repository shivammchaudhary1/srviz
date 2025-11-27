import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/config";

const initialState = {
  leads: [],
};
export const addLeads = createAsyncThunk(
  "lead/addLeads",
  async (leadData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${config.BACKEND_API}/api/leads/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
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

export const getAllLeads = createAsyncThunk(
  "lead/getAllLeads",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(`${config.BACKEND_API}/api/leads`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

const leadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(addLeads.fulfilled, (state, action) => {
    //   //   state.leads.push(action.payload);
    // });

    builder.addCase(getAllLeads.fulfilled, (state, action) => {
      state.leads = action.payload;
    });
  },
});

export default leadSlice.reducer;
