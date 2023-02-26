import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components";
import { Login, Register } from "./pages";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};
