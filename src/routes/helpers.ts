import { IRoutesConfig } from "./types";
import { routesConfig } from "./constants";

export const filterRoutes = (token?: string): IRoutesConfig[] => {
  return routesConfig.reduce((acc: IRoutesConfig[], route): IRoutesConfig[] => {
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
  }, []);
};

export const getFilteredRoutesPaths = (token?: string): string[] =>
  filterRoutes(token).map((route) => route.path);
