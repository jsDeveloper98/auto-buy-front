import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthService } from "../../services";
import { RegFormValues } from "../../pages/register/Register.types";

export const createUser = createAsyncThunk(
  "users/create",
  async (values: RegFormValues) => {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createUser.fulfilled,
      (state, { payload }: PayloadAction<IData>) => {
        state.loading = false;
        state.data = payload;
      }
    );
    builder.addCase(createUser.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
  },
});

export default usersSlice.reducer;
