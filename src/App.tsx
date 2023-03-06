import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "./routes";
import { NavBar } from "./components";
import { useAppDispatch } from "./redux/hooks";
import { checkLogin } from "./redux/slices/users";
import { ConfirmationModal } from "./components/confirmation-modal";

export const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  const handleConfirmAction = (actionType: string): void => {
    if (actionType === "logout") {
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
