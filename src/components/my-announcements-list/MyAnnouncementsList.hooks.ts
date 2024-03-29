import { useMemo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { convertAnnouncementsForList } from "../../helpers/announcement";
import { getCurrentUserAnnouncements } from "../../redux/slices/currentUser";

export const useMyAnnouncementsList = () => {
  const dispatch = useAppDispatch();

  const {
    data: {
      announcements: { data, loading },
    },
  } = useAppSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getCurrentUserAnnouncements());
  }, [dispatch]);

  const listData = useMemo(() => convertAnnouncementsForList(data), [data]);

  return {
    loading,
    listData,
  };
};
