import { FC } from "react";

import { Card } from "../card";
import { IAnnouncement } from "../../types";

interface IProps {
  data: IAnnouncement[];
}

// TODO: continue and correct styles of this component
export const AnnouncementsList: FC<IProps> = ({ data }) => {
  return (
    <div className="AnnouncementsList">
      {data.map((item) => (
        <div key={item._id}>
          <Card />
          <div>{item.make}</div>
        </div>
      ))}
    </div>
  );
};
