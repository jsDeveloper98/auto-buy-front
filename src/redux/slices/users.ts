import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RegFormValues } from "../../pages/register/Register.types";
import { AuthService } from "../../services";

export const createUser = createAsyncThunk(
  "users/create",
  async (values: RegFormValues) => {
    return AuthService.register(values);
  }
);

const initialState: {
  error: null;
  loading: boolean;
  data: {
    userId: string;
    token: string;
  };
} = {
  error: null,
  loading: false,
  data: {
    userId: "",
    token: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending.type]: (state) => {
      state.loading = true;
    },
    [createUser.rejected.type]: (state, action) => {
      state.loading = false;
      // state.error = action.errorMessage;
    },
  },
});

export default usersSlice.reducer;
