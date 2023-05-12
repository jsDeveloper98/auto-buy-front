import { FC } from "react";

import { Card } from "../card";
import { ICard } from "../card/Card.types";

interface IProps {
  data: ICard[];
}

export const List: FC<IProps> = ({ data }) => {
  return (
    <div className="List">
      {data.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};
