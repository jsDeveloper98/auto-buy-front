import { useNavigate } from "react-router-dom";

import { login } from "../../redux/slices/auth";
import { ILoginFormValues } from "./LoginForm.types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.auth);

  const handleLogin = (values: ILoginFormValues) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        navigate("/");
      });
  };

  return {
    error,
    loading,
    handleLogin,
  };
};
