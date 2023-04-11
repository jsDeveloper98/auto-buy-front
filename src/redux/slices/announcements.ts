import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AnnouncementService } from "../../services";
import { ISuccessResponse } from "../../types";

export const createAnnouncement = createAsyncThunk(
  "announcements/create",
  async (values: FormData) => {
    return AnnouncementService.create(values);
  }
);

interface IData {}

const initialState: {
  data: IData;
  error?: string;
  loading: boolean;
} = {
  data: {},
  error: "",
  loading: false,
};

// TODO: finish announcements slice creation

const announcementsSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAnnouncement.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createAnnouncement.fulfilled,
      (state, { payload }: PayloadAction<ISuccessResponse<IData>>) => {
        state.error = "";
        state.loading = false;
        state.data = payload.data;
      }
    );
    builder.addCase(createAnnouncement.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export const {} = announcementsSlice.actions;

export default announcementsSlice.reducer;
