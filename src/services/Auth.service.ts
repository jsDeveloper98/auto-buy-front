import { IRegFormValues } from "../pages/register/Register.types";

class AuthS {
  async register(values: IRegFormValues) {
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("sdkjuasd");

      const jsonRes = await res.json();

      if (!res.ok) {
        throw new Error(jsonRes.message);
      }

      return jsonRes;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export const AuthService = new AuthS();
