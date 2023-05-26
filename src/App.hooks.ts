import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "./redux/hooks";
import { checkLogin } from "./redux/slices/users";
import { getFilteredRoutesPaths } from "./routes/helpers";

export const useApp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(checkLogin(JSON.parse(userData)));
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
