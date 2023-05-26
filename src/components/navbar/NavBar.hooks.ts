import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openConfirmationModal } from "../../redux/slices/confirmationModal";

export const useNavBar = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  const pathIsActive = (path: string): boolean => pathname === path;

  const openLogoutConfirmation = (): void => {
    dispatch(
      openConfirmationModal({
        title: "Your'e sure that you want to logout?",
        confirmActionName: "logout",
      })
    );
  };

  return {
    token,
    pathIsActive,
    openLogoutConfirmation,
  };
};
