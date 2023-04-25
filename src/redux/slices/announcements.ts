import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AnnouncementService } from "../../services";
import { IAnnouncement } from "../../types";

export const createAnnouncement = createAsyncThunk(
  "announcements/create",
  async ({ values, token }: { values: FormData; token?: string }) => {
    return AnnouncementService.create(values, token);
  }
);

const initialState: {
  error?: string;
  loading: boolean;
  data: IAnnouncement;
} = {
  error: "",
  loading: false,
  data: {} as IAnnouncement,
};

const announcementsSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAnnouncement.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAnnouncement.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.data = payload.data;
    });
    builder.addCase(createAnnouncement.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export default announcementsSlice.reducer;
