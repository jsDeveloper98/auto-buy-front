import { useNavigate } from "react-router-dom";

import { register } from "../../redux/slices/users";
import { IRegFormValues } from "./RegisterForm.types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.users);

  const handleRegister = (values: IRegFormValues) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        navigate("/");
      });
  };

  return {
    error,
    loading,
    handleRegister,
  };
};
