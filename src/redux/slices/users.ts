import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserService } from "../../services";
import { IAnnouncement } from "./../../types";

export const getUserAnnouncements = createAsyncThunk(
  "users/user/announcements",
  async () => UserService.getAnnouncements()
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

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAnnouncements.pending, (state) => {
      state.data.announcements.loading = true;
    });
    builder.addCase(getUserAnnouncements.fulfilled, (state, { payload }) => {
      state.data.announcements.error = "";
      state.data.announcements.loading = false;
      state.data.announcements.data = payload.data;
    });
    builder.addCase(getUserAnnouncements.rejected, (state, { error }) => {
      state.data.announcements.loading = false;
      state.data.announcements.error = error.message;
    });
  },
});

export default usersSlice.reducer;
