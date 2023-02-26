import { configureStore } from "@reduxjs/toolkit";

import createUser from "./users";

const store = configureStore({
  reducer: {
    users: createUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
