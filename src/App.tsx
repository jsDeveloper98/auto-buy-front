import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components";
import { AppRoutes } from "./components/app-routes";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </div>
  );
};
