import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import usersReducer from "./slices/users";
import announcementsReducer from "./slices/announcements";
import confirmationModalReducer from "./slices/confirmationModal";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    announcements: announcementsReducer,
    confirmationModal: confirmationModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
