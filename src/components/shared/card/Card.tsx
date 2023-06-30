import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card as BCard, ListGroup } from "react-bootstrap";

import { ICard } from "./Card.types";
import { BASE_URL } from "../../../constants";

interface IProps {
  item: ICard;
}

export const Card: FC<IProps> = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className="Card"
      to={`${
        pathname !== "/"
          ? `${pathname}/`
          : `${pathname}announcements/${item._id}`
      }`}
      onClick={(e) => !item.isClickable && e.preventDefault()}
    >
      <BCard style={{ width: "18rem" }}>
        {item.imgPath && (
          <BCard.Img
            variant="top"
            src={`${BASE_URL}/${item.imgPath}`}
            style={{
              height: "150px",
              objectFit: "cover",
            }}
          />
        )}

        <BCard.Body>
          <BCard.Title>{item.title}</BCard.Title>
          {item.description && (
            <BCard.Text
              style={{
                height: "50px",
                WebkitLineClamp: 2, // Number of lines to display
                overflow: "hidden",
                display: "-webkit-box",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.description}
            </BCard.Text>
          )}
        </BCard.Body>
        <ListGroup className="list-group-flush">
          {item.children.map((childItem) => (
            <ListGroup.Item key={childItem.label}>
              {childItem.label}: {childItem.value}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </BCard>
    </Link>
  );
};
