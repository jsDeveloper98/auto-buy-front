import { request } from "../utils";
import { ICarMake, ICarModel, ISuccessResponse } from "../types";
import {
  X_RAPID_API_KEY,
  X_RAPID_API_HOST,
  RAPID_API_BASE_URL,
} from "../constants";

class CarsS {
  async getMakes() {
    return request<ISuccessResponse<ICarMake[]>>({
      url: `${RAPID_API_BASE_URL}/makes?direction=asc&sort=id`,
      options: {
        headers: {
          "X-RapidAPI-Key": X_RAPID_API_KEY,
          "X-RapidAPI-Host": X_RAPID_API_HOST,
        },
      },
    });
  }

  async getModels(make: string) {
    return request<ISuccessResponse<ICarModel[]>>({
      url: `${RAPID_API_BASE_URL}/models?direction=asc&sort=id&make=${make}&year=2020`,
      options: {
        headers: {
          "X-RapidAPI-Key": X_RAPID_API_KEY,
          "X-RapidAPI-Host": X_RAPID_API_HOST,
        },
      },
    });
  }
}

export const CarsService = new CarsS();
