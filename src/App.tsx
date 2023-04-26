import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoutes } from "./routes";
import { NavBar } from "./components";
import { useAppDispatch } from "./redux/hooks";
import { checkLogin } from "./redux/slices/users";
import { getCarMakes } from "./redux/slices/cars";
import { getFilteredRoutesPaths } from "./routes/helpers";
import { ConfirmationModal } from "./components/confirmation-modal";

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

    if (actionType === "logout" && !availableRoutes.includes(pathname)) {
      localStorage.removeItem("userData");
      navigate("/login");
    }
  };

  // TODO: find another api or buy subscription in order to get all car models from all years
  // TODO: but while this project in development implement filtering with Years in frontend and use only free api
  useEffect(() => {
    dispatch(getCarMakes());
  }, [dispatch]);

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
