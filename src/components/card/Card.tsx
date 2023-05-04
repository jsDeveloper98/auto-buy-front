import React from "react";
import { Card as BCard, ListGroup } from "react-bootstrap";

export const Card = () => {
  return (
    <BCard style={{ width: "18rem" }}>
      <BCard.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <BCard.Body>
        <BCard.Title>BCard Title</BCard.Title>
        <BCard.Text>
          Some quick example text to build on the BCard title and make up the
          bulk of the BCard's content.
        </BCard.Text>
      </BCard.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <BCard.Body>
        <BCard.Link href="#">BCard Link</BCard.Link>
        <BCard.Link href="#">Another Link</BCard.Link>
      </BCard.Body>
    </BCard>
  );
};
