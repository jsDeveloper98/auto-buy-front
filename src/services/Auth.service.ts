import { request } from "../utils";
import { BASE_URL } from "../constants";
import { IRegisterData, ISuccessResponse } from "../types";
import { IRegFormValues } from "../pages/register/Register.types";

class AuthS {
  async register(values: IRegFormValues) {
    return request<ISuccessResponse<IRegisterData>>({
      url: `${BASE_URL}/auth/register`,
      options: {
        body: values,
        method: "POST",
      },
    });
  }
}

export const AuthService = new AuthS();
