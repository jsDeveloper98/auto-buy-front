import { FC } from "react";

import { MyAnnouncementsList } from "../../components";

export const MyAnnouncements: FC = () => {
  return (
    <div className="MyAnnouncements py-5">
      <MyAnnouncementsList />
    </div>
  );
};
