import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { reduxStoredFunctionMap } from "../../components/confirmation-modal/ConfirmationModal.constants";

interface IData {
  title: string;
  body?: string;
  confirmActionName: keyof typeof reduxStoredFunctionMap;
}

const initialState: {
  data: IData;
  isOpen: boolean;
} = {
  isOpen: false,
  data: {} as IData,
};

const confirmationModalSlice = createSlice({
  name: "confirmationModal",
  initialState: initialState,
  reducers: {
    openConfirmationModal: (state, action: PayloadAction<IData>) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    closeConfirmationModal: (state) => {
      state.isOpen = false;
      state.data = {} as IData;
    },
  },
});

export const { openConfirmationModal, closeConfirmationModal } =
  confirmationModalSlice.actions;

export default confirmationModalSlice.reducer;
