import { configureStore } from "@reduxjs/toolkit";

import createUser from "./slices/users";

const store = configureStore({
  reducer: {
    users: createUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
