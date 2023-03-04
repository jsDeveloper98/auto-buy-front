import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../../pages/home";
import { Login, Register } from "../../pages";
import { useAppSelector } from "../../redux/hooks";

export const AppRoutes: FC = () => {
  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  return (
    <Routes>
      {token ? (
        <Route path="/" element={<Home />} />
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
};
