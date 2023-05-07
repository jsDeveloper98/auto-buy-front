import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoutes } from "./routes";
import { useAppDispatch } from "./redux/hooks";
import { checkLogin } from "./redux/slices/users";
import { NavBar, ConfirmationModal } from "./components";
import { getFilteredRoutesPaths } from "./routes/helpers";

export const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(checkLogin(JSON.parse(userData)));
    }
  }, [dispatch]);

  const handleConfirmAction = (actionType: string): void => {
    const availableRoutes = getFilteredRoutesPaths();

    if (actionType === "logout") {
      localStorage.removeItem("userData");

      if (!availableRoutes.includes(pathname)) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Container>
        <AppRoutes />
      </Container>
      <ConfirmationModal onConfirm={handleConfirmAction} />
    </div>
  );
};
