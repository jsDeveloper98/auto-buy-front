import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import currentUserReducer from "./slices/currentUser";
import announcementsReducer from "./slices/announcements";
import confirmationModalReducer from "./slices/confirmationModal";

const store = configureStore({
  reducer: {
    auth: authReducer,
    currentUser: currentUserReducer,
    announcements: announcementsReducer,
    confirmationModal: confirmationModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
