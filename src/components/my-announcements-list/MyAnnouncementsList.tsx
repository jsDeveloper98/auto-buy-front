import { FC } from "react";
import { Spinner } from "react-bootstrap";

import { List } from "../shared";
import { useMyAnnouncementsList } from "./MyAnnouncementsList.hooks";

export const MyAnnouncementsList: FC = () => {
  const { listData, loading } = useMyAnnouncementsList();

  return (
    <div className="MyAnnouncementsList">
      {loading ? (
        <Spinner
          animation="grow"
          className="position-absolute"
          style={{ left: "50%", right: "50%" }}
        />
      ) : (
        <List data={listData} />
      )}
    </div>
  );
};
