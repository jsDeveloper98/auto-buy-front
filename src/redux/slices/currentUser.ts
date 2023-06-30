import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUserData } from "../../utils";
import { IAnnouncement } from "../../types";
import { UserService } from "../../services";

export const getCurrentUserAnnouncements = createAsyncThunk(
  "user/announcements",
  async () => {
    const { userId } = getUserData();
    return UserService.getAnnouncements(userId);
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
}

const initialState = {
  data: {
    announcements: {
      error: "",
      data: [],
      fetched: false,
      loading: false,
    },
  } as IData,
};

const currentUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUserAnnouncements.pending, (state) => {
      state.data.announcements.loading = true;
    });
    builder.addCase(
      getCurrentUserAnnouncements.fulfilled,
      (state, { payload }) => {
        state.data.announcements.error = "";
        state.data.announcements.fetched = true;
        state.data.announcements.loading = false;
        state.data.announcements.data = payload.data;
      }
    );
    builder.addCase(
      getCurrentUserAnnouncements.rejected,
      (state, { error }) => {
        state.data.announcements.loading = false;
        state.data.announcements.error = error.message;
      }
    );
  },
});

export default currentUserSlice.reducer;
