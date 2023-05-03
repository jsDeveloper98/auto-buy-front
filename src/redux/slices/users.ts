import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthData } from "./../../types";
import { AuthService } from "../../services";
import { IRegFormValues } from "../../pages/register/Register.types";
import { ILoginFormValues } from "../../pages/login/Login.types";

export const register = createAsyncThunk(
  "users/register",
  async (values: IRegFormValues) => {
    return AuthService.register(values);
  }
);

export const login = createAsyncThunk(
  "users/login",
  async (values: ILoginFormValues) => {
    return AuthService.login(values);
  }
);

const initialState: {
  error?: string;
  data: IAuthData;
  loading: boolean;
} = {
  data: {},
  error: "",
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    checkLogin: (state, { payload }: PayloadAction<IAuthData>) => {
      state.data = payload;
    },
    logout: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.data = payload.data;
    });
    builder.addCase(register.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });

    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.error = "";
      state.loading = false;
      state.data = payload.data;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export const { checkLogin, logout } = usersSlice.actions;

export default usersSlice.reducer;
