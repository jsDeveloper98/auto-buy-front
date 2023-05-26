import { Carousel, Image } from "react-bootstrap";

import { BASE_URL } from "../../constants";
import { useAnnouncementDetails } from "./AnnouncementDetailsCard.hooks";

export const AnnouncementDetailsCard = () => {
  const { announcement, handlePhotoSelection, selectedPhotoPath } =
    useAnnouncementDetails();

  if (!announcement) {
    return null;
  }

  return (
    <div className="AnnouncementDetailsCard mt-5">
      <Carousel
        onSelect={handlePhotoSelection}
        activeIndex={selectedPhotoPath}
        interval={null}
        controls={announcement.files.length > 1 ? true : false}
        style={{ width: "830px", height: "450px", backgroundColor: "darkgray" }}
      >
        {announcement.files.map((image, index) => (
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
        {announcement.files.map((image, index) => (
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
  );
};
