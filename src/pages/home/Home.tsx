import { FC } from "react";

import { AnnouncementsList } from "../../components/announcements-list";

export const Home: FC = () => {
  return (
    <div className="Home">
      <AnnouncementsList />
    </div>
  );
};
