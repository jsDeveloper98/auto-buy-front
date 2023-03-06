import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { AppRoutes } from "./routes";
import { NavBar } from "./components";
import { useAppDispatch } from "./redux/hooks";
import { checkLogin } from "./redux/slices/users";
import { getFilteredRoutesPaths } from "./routes/helpers";
import { ConfirmationModal } from "./components/confirmation-modal";

export const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  const handleConfirmAction = (actionType: string): void => {
    const availableRoutes = getFilteredRoutesPaths();

    if (actionType === "logout" && !availableRoutes.includes(pathname)) {
      navigate("/login");
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
