import { useMemo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAnnouncements } from "../../redux/slices/announcements";
import { convertAnnouncementsForList } from "../../helpers/announcement";

export const useAnnouncementsList = () => {
  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(getAnnouncements());
  }, [dispatch]);

  const listData = useMemo(() => convertAnnouncementsForList(data), [data]);

  return {
    loading,
    listData,
  };
};
