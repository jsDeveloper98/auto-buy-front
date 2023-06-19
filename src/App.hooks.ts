import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { signin } from "./redux/slices/auth";
import { useAppDispatch } from "./redux/hooks";
import { getFilteredRoutesPaths } from "./routes/helpers";

export const useApp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(signin(JSON.parse(userData)));
    }
  }, [dispatch]);

  const handleConfirmAction = (actionType: string) => {
    const availableRoutes = getFilteredRoutesPaths();

    if (actionType === "logout") {
      localStorage.removeItem("userData");

      if (!availableRoutes.includes(pathname)) {
        navigate("/login");
      }
    }
  };

  return { handleConfirmAction };
};
