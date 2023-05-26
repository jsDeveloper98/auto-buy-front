import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { getUserAnnouncements } from "../../redux/slices/announcements";

export const useAnnouncementDetails = () => {
  const dispatch = useAppDispatch();
  const { announcementId } = useParams();

  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  const {
    data: {
      userAnnouncements: { data, fetched },
    },
  } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    if (!fetched) {
      dispatch(getUserAnnouncements(token));
    }
  }, [dispatch, fetched, token]);

  const [selectedPhotoPath, setSelectedPhotoPath] = useState<number>(0);

  const announcement = data.find((item) => item._id === announcementId);

  const handlePhotoSelection = (index: number) => setSelectedPhotoPath(index);

  return {
    announcement,
    selectedPhotoPath,
    handlePhotoSelection,
  };
};
