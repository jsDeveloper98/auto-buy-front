import { FC, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { NotFound } from "./pages/not-found";
import { useAppSelector } from "./redux/hooks";
import { Login, Register, Home } from "./pages";

interface IRoutesConfig {
  path: string;
  type: string;
  Component: FC;
}

const routesConfig: IRoutesConfig[] = [
  {
    path: "/*",
    type: "common",
    Component: NotFound,
  },
  {
    path: "/",
    type: "common",
    Component: Home,
  },
  {
    path: "/login",
    type: "unauthorized",
    Component: Login,
  },
  {
    path: "/register",
    type: "unauthorized",
    Component: Register,
  },
];

export const AppRoutes: FC = () => {
  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  const filteredRoutes = useMemo(
    () =>
      routesConfig.reduce((acc: IRoutesConfig[], route): IRoutesConfig[] => {
        if (route.type === "common") {
          return [...acc, route];
        }

        if (token && route.type === "authorized") {
          return [...acc, route];
        }

        if (!token && route.type === "unauthorized") {
          return [...acc, route];
        }

        return acc;
      }, []),
    [token]
  );

  return (
    <Routes>
      {filteredRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
