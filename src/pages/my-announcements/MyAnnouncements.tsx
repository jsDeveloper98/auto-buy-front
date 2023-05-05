import { FC, useEffect } from "react";

import { AnnouncementsList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserAnnouncements } from "../../redux/slices/announcements";

export const MyAnnouncements: FC = () => {
  const dispatch = useAppDispatch();

  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  const {
    data: {
      userAnnouncements: { data },
    },
  } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(getUserAnnouncements(token));
  }, [dispatch, token]);

  return (
    <div className="MyAnnouncements">
      <h1>MyAnnouncements</h1>
      <AnnouncementsList data={data} />
    </div>
  );
};
