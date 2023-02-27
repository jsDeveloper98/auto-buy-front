import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RegFormValues } from "../../pages/register/Register.types";

export const createUser = createAsyncThunk(
  "users/create",
  async (values: RegFormValues) => {
    const data = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    console.log("%c data ===>", "color: #90ee90", data);
    console.log("%c values ===>", "color: #90ee90", values);

    console.log(
      "%c await data.json() ===>",
      "color: #90ee90",
      await data.json()
    );
  }
);

const initialState: {
  userId: string;
  token: string;
} = {
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
