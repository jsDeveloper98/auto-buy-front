import { FC } from "react";
import { Container } from "react-bootstrap";

import { AppRoutes } from "./routes";
import { useApp } from "./App.hooks";
import { NavBar, ConfirmationModal } from "./components";

export const App: FC = () => {
  const { handleConfirmAction } = useApp();

  return (
    <div className="App">
      <NavBar />
      <Container className="py-5">
        <AppRoutes />
      </Container>
      <ConfirmationModal onConfirm={handleConfirmAction} />
    </div>
  );
};
