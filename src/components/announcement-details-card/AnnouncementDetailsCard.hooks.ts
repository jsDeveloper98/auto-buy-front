import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Change this to getting all announcements not only announcements of current user
import { getUserAnnouncements } from "../../redux/slices/users";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { convertDetailedAnnouncement } from "../../helpers/announcement";

export const useAnnouncementDetails = () => {
  const dispatch = useAppDispatch();
  const { announcementId } = useParams();

  const {
    data: {
      announcements: { data, fetched },
    },
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (!fetched) {
      dispatch(getUserAnnouncements());
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
