import { request } from "../utils";
import { BASE_URL } from "../constants";
import { IAuthData, ISuccessResponse } from "../types";
import { ILoginFormValues } from "../pages/login/Login.types";
import { IRegFormValues } from "../pages/register/Register.types";

class AuthS {
  async register(values: IRegFormValues) {
    return request<ISuccessResponse<IAuthData>>({
      url: `${BASE_URL}/auth/register`,
      options: {
        body: values,
        method: "POST",
      },
    });
  }

  async login(values: ILoginFormValues) {
    return request<ISuccessResponse<IAuthData>>({
      url: `${BASE_URL}/auth/login`,
      options: {
        body: values,
        method: "POST",
      },
    });
  }
}

export const AuthService = new AuthS();
