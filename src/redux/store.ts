import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/users";
import announcementsReducer from "./slices/announcements";
import confirmationModalReducer from "./slices/confirmationModal";

const store = configureStore({
  reducer: {
    users: usersReducer,
    announcements: announcementsReducer,
    confirmationModal: confirmationModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
