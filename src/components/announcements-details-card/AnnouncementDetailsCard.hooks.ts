import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAnnouncements } from "../../redux/slices/announcements";
import { convertDetailedAnnouncement } from "../../helpers/announcement";

export const useAnnouncementDetails = () => {
  const dispatch = useAppDispatch();
  const { announcementId } = useParams();
  const { data, fetched } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    if (!fetched) {
      dispatch(getAnnouncements());
    }
  }, [dispatch, fetched]);

  const [selectedPhotoPath, setSelectedPhotoPath] = useState<number>(0);
  const announcement = data.find((item) => item._id === announcementId);
  const handlePhotoSelection = (index: number) => setSelectedPhotoPath(index);
  const cardItem = convertDetailedAnnouncement(announcement);

  return {
    cardItem,
    announcement,
    selectedPhotoPath,
    handlePhotoSelection,
  };
};
