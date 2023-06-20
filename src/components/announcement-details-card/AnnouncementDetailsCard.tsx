import { useNavigate } from "react-router-dom";
import { Card, Carousel, Image } from "react-bootstrap";

import { BASE_URL } from "../../constants";
import { useAnnouncementDetails } from "./AnnouncementDetailsCard.hooks";

export const AnnouncementDetailsCard = () => {
  const navigate = useNavigate();
  const { announcement, handlePhotoSelection, selectedPhotoPath, cardItem } =
    useAnnouncementDetails();

  if (!announcement || !cardItem) {
    return null;
  }

  return (
    <div className="AnnouncementDetailsCard d-flex">
      <div>
        <svg
          width="30"
          height="30"
          fill="gray"
          cursor="pointer"
          viewBox="0 0 16 16"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "10px" }}
          className="bi bi-arrow-left-square-fill"
        >
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
        </svg>

        <Carousel
          onSelect={handlePhotoSelection}
          activeIndex={selectedPhotoPath}
          interval={null}
          controls={announcement.images.length > 1 ? true : false}
          style={{
            width: "830px",
            height: "450px",
            backgroundColor: "darkgray",
          }}
        >
          {announcement.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`${BASE_URL}/${image.path}`}
                alt="First slide"
                style={{
                  height: "450px",
                  objectFit: "contain",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div
          style={{
            width: "800px",
            display: "grid",
            columnGap: "5px",
            justifyContent: "spaceBetween",
            gridTemplateColumns: "200px 200px 200px 200px",
          }}
        >
          {announcement.images.map((image, index) => (
            <Image
              key={index}
              onClick={() => handlePhotoSelection(index)}
              src={`${BASE_URL}/${image.path}`}
              alt="Description of the image"
              width="200"
              height="200"
              style={{
                objectFit: "cover",
                marginTop: "5px",
              }}
            />
          ))}
        </div>
      </div>

      <div className="px-lg-3" style={{ width: "500px" }}>
        <table className="table">
          <tbody>
            {cardItem.children.map(({ label, value }) => (
              <tr>
                <td>{label}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Card>
          <Card.Body>{cardItem.description}</Card.Body>
        </Card>
      </div>
    </div>
  );
};
