import { DateTime } from "luxon";

import { IAnnouncement } from "../types";
import { ICardChild } from "../components/shared/card/Card.types";

export const convertDetailedAnnouncement = (announcement?: IAnnouncement) => {
  if (!announcement) {
    return;
  }

  return convertAnnouncementForList(announcement);
};

export const convertAnnouncementForList = (announcement: IAnnouncement) => {
  const { images, createdAt, make, model, price, year, ...rest } = announcement;

  const date = DateTime.fromISO(createdAt, { zone: "utc" });
  const publishedAt = date.toFormat("dd MM yyyy");

  const children: ICardChild[] = [
    {
      label: "Make",
      value: make,
    },
    {
      label: "Model",
      value: model,
    },
    {
      label: "Year",
      value: year,
    },
    {
      label: "Published At",
      value: publishedAt,
    },
  ];

  if (price) {
    children.push({
      value: price,
      label: "Price",
    });
  }

  return {
    children,
    isClickable: true,
    imgPath: images[0]?.path,
    ...rest,
  };
};

export const convertAnnouncementsForList = (announcements: IAnnouncement[]) =>
  announcements.map(convertAnnouncementForList);
