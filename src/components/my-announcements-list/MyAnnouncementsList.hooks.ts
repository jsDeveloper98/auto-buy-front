import { useMemo, useEffect } from "react";

import { DateTime } from "luxon";

import { ICard, ICardChild } from "../shared/card/Card.types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserAnnouncements } from "../../redux/slices/announcements";

export const useMyAnnouncementsList = () => {
  const dispatch = useAppDispatch();

  const {
    data: { token },
  } = useAppSelector((state) => state.users);

  const {
    data: {
      userAnnouncements: { data, loading },
    },
  } = useAppSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(getUserAnnouncements(token));
  }, [dispatch, token]);

  const listData = useMemo(
    () =>
      data.map((item): ICard => {
        const {
          files,
          createdAt,
          make,
          model,
          price,
          year,
          user,
          description,
          ...rest
        } = item;

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
            label: "Price",
            value: price,
          });
        }

        return {
          children,
          isClickable: true,
          imgPath: files[0].path,
          ...rest,
        };
      }),
    [data]
  );

  return {
    loading,
    listData,
  };
};
