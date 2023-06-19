import { logout } from "../../redux/slices/auth";

export const maskStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

export const reduxStoredFunctionMap = {
  logout,
};
