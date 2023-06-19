import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// TODO: continue announcement slice creation

import { IAnnouncement } from "../../types";
// import { AnnouncementService } from "../../services";

interface IData {
  error?: string;
  loading: boolean;
  fetched: boolean;
  data: IAnnouncement[];
}

const initialState = {
  data: {
    error: "",
    data: [],
    fetched: false,
    loading: false,
  } as IData,
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default announcementsSlice.reducer;
