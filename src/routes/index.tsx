import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { getFilteredRoutes } from "./helpers";
import { useAppSelector } from "../redux/hooks";

export const AppRoutes: FC = () => {
  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  return (
    <Routes>
      {getFilteredRoutes(token).map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
