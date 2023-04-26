import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ICarMake } from "../../types";
import { CarsService } from "../../services/Cars.service";

export const getCarMakes = createAsyncThunk("cars/getMakes", async () =>
  CarsService.getMakes()
);

export const getCarModels = createAsyncThunk(
  "cars/getModels",
  async (make: string) => CarsService.getModels(make)
);

interface ICarMakeData {
  error?: string;
  loading: boolean;
  data: ICarMake[];
}

interface ICarModelData {
  error?: string;
  loading: boolean;
  data: any[];
}

interface IData {
  carMakes: ICarMakeData;
  carModels: ICarModelData;
}

const initialState = {
  data: {
    carMakes: {
      error: "",
      data: [],
      loading: false,
    },
    carModels: {
      error: "",
      data: [],
      loading: false,
    },
  } as IData,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarMakes.pending, (state) => {
      state.data.carMakes.loading = true;
    });
    builder.addCase(getCarMakes.fulfilled, (state, { payload }) => {
      state.data.carMakes.error = "";
      state.data.carMakes.loading = false;
      state.data.carMakes.data = payload.data;
    });
    builder.addCase(getCarMakes.rejected, (state, { error }) => {
      state.data.carMakes.loading = false;
      state.data.carMakes.error = error.message;
    });

    builder.addCase(getCarModels.pending, (state) => {
      state.data.carModels.loading = true;
    });
    builder.addCase(getCarModels.fulfilled, (state, { payload }) => {
      state.data.carModels.error = "";
      state.data.carModels.loading = false;
      state.data.carModels.data = payload.data;
    });
    builder.addCase(getCarModels.rejected, (state, { error }) => {
      state.data.carModels.loading = false;
      state.data.carModels.error = error.message;
    });
  },
});

export default carsSlice.reducer;
