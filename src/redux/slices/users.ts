import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthService } from "../../services";
import { IRegisterData } from "./../../types";
import { IRegFormValues } from "../../pages/register/Register.types";

export const createUser = createAsyncThunk(
  "users/create",
  async (values: IRegFormValues) => {
    return AuthService.register(values);
  }
);

const initialState: {
  error?: string;
  loading: boolean;
  data: IRegisterData;
} = {
  data: {},
  error: "",
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    checkLogin: (state, { payload }: PayloadAction<IRegisterData>) => {
      state.data = payload;
    },
    logout: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.data = payload.data;
    });
    builder.addCase(createUser.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export const { checkLogin, logout } = usersSlice.actions;

export default usersSlice.reducer;
