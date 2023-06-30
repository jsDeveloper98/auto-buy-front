import { FC } from "react";
import { Spinner } from "react-bootstrap";

import { List } from "../shared";
import { useAnnouncementsList } from "./AnnouncementsList.hooks";

export const AnnouncementsList: FC = () => {
  const { listData, loading } = useAnnouncementsList();

  return (
    <div className="AnnouncementsList">
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
