import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegFormValues } from "../pages/register/Register.types";

export const createUser = createAsyncThunk(
  "users/create",
  async (values: RegFormValues) => {
    console.log("%c values ===>", "color: #90ee90", values);
  }
);

interface IInitialState {
  userId: string;
  token: string;
}

const initialState: IInitialState = {
  userId: "",
  token: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [createUser.fulfilled.type]: (state, action) => {
      // state.userId = true;
      // state.user = action.payload.user;
      // return;
    },
  },
});

export default usersSlice.reducer;
