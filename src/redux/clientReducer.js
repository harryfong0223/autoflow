import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchInitData
} from "../api";


const clientSlice = createSlice({
  name: "client",
  initialState: {
    initData: {},
    loadingInitData: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitDataAsync.pending, (state) => {
        state.loadingInitData = true;
      })
      .addCase(fetchInitDataAsync.fulfilled, (state, action) => {
        state.initData = action.payload;
        state.loadingInitData = false;
      })
      .addCase(fetchInitDataAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loadingInitData = false;
      })
  },
});

export const fetchInitDataAsync = createAsyncThunk(
  "client/fetchInitData",
  async (_, thunkAPI) => {
    try {
      const response = await fetchInitData();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);


export default clientSlice.reducer;
