import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthService } from "../../services";
import { ISuccessResponse } from "../../types";
import { IRegFormValues } from "../../pages/register/Register.types";

export const createUser = createAsyncThunk(
  "users/create",
  async (values: IRegFormValues) => {
    return AuthService.register(values);
  }
);

interface IData {
  token?: string;
  userId?: string;
}

const initialState: {
  data: IData;
  error?: string;
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
    checkLogin: (state) => {
      const userData = localStorage.getItem("userData");

      console.log("%c userData ===>", "color: #90ee90", userData);

      if (userData) {
        state.data = JSON.parse(userData);
      }
    },
    logout: (state) => {
      state.data = {};
      localStorage.removeItem("userData");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createUser.fulfilled,
      (state, { payload }: PayloadAction<ISuccessResponse<IData>>) => {
        state.error = "";
        state.loading = false;
        state.data = payload.data;
        localStorage.setItem("userData", JSON.stringify(payload.data));
      }
    );
    builder.addCase(createUser.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export const { checkLogin, logout } = usersSlice.actions;

export default usersSlice.reducer;
