import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IAnnouncement } from "../../types";
import { AnnouncementService } from "../../services";

export const getAnnouncements = createAsyncThunk("announcements", async () =>
  AnnouncementService.get()
);

const initialState: {
  error?: string;
  loading: boolean;
  fetched: boolean;
  data: IAnnouncement[];
} = {
  data: [],
  error: "",
  loading: false,
  fetched: false,
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnnouncements.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAnnouncements.fulfilled, (state, { payload }) => {
      state.error = "";
      state.fetched = true;
      state.loading = false;
      state.data = payload.data;
    });
    builder.addCase(getAnnouncements.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export default announcementsSlice.reducer;
