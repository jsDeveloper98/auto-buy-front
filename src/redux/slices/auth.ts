import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthData } from "./../../types";
import { AuthService } from "../../services";
import { ILoginFormValues } from "../../components/login-form/LoginForm.types";
import { IRegFormValues } from "../../components/register-form/RegisterForm.types";

export const register = createAsyncThunk(
  "auth/register",
  async (values: IRegFormValues) => AuthService.register(values)
);

export const login = createAsyncThunk(
  "auth/login",
  async (values: ILoginFormValues) => AuthService.login(values)
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
  name: "auth",
  initialState,
  reducers: {
    signin: (state, { payload }: PayloadAction<IAuthData>) => {
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

export const { signin, logout } = usersSlice.actions;

export default usersSlice.reducer;
