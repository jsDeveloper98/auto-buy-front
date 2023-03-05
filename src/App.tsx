import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { NavBar } from "./components";
import { useAppDispatch } from "./redux/hooks";
import { checkLogin } from "./redux/slices/users";
import { ConfirmationModal } from "./components/confirmation-modal";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container>
          <AppRoutes />
        </Container>
        <ConfirmationModal />
      </BrowserRouter>
    </div>
  );
};
