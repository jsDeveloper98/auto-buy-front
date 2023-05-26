import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IAnnouncement } from "../../types";
import { AnnouncementService } from "../../services";

export const getUserAnnouncements = createAsyncThunk(
  "announcements/get/user",
  async (token?: string) => {
    return AnnouncementService.getUserAnnouncements(token);
  }
);

interface IAnnouncementData {
  error?: string;
  loading: boolean;
  fetched: boolean;
  data: IAnnouncement[];
}

interface IData {
  announcements: IAnnouncementData;
  userAnnouncements: IAnnouncementData;
}

const initialState = {
  data: {
    announcements: {
      error: "",
      data: [],
      fetched: false,
      loading: false,
    },
    userAnnouncements: {
      error: "",
      data: [],
      fetched: false,
      loading: false,
    },
  } as IData,
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAnnouncements.pending, (state) => {
      state.data.userAnnouncements.loading = true;
    });
    builder.addCase(getUserAnnouncements.fulfilled, (state, { payload }) => {
      state.data.userAnnouncements.error = "";
      state.data.userAnnouncements.fetched = true;
      state.data.userAnnouncements.loading = false;
      state.data.userAnnouncements.data = payload.data;
    });
    builder.addCase(getUserAnnouncements.rejected, (state, { error }) => {
      state.data.userAnnouncements.loading = false;
      state.data.userAnnouncements.error = error.message;
    });
  },
});

export default announcementsSlice.reducer;
