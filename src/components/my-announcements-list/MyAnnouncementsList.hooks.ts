import { useMemo, useEffect } from "react";

import { getUserAnnouncements } from "../../redux/slices/users";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { convertAnnouncementsForList } from "../../helpers/announcement";

export const useMyAnnouncementsList = () => {
  const dispatch = useAppDispatch();

  const {
    data: {
      announcements: { data, loading },
    },
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserAnnouncements());
  }, [dispatch]);

  const listData = useMemo(() => convertAnnouncementsForList(data), [data]);

  return {
    loading,
    listData,
  };
};
