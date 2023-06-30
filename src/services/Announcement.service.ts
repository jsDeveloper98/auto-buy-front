import { BASE_URL } from "../constants";
import { getUserData, request } from "../utils";
import { IAnnouncement, ISuccessResponse } from "../types";

class AnnouncementS {
  async create(values: FormData) {
    const { token, userId } = getUserData();
    return request<ISuccessResponse<IAnnouncement>>({
      serializeToJson: false,
      url: `${BASE_URL}/users/${userId}/announcements`,
      options: {
        body: values,
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    });
  }

  async get() {
    return request<ISuccessResponse<IAnnouncement[]>>({
      url: `${BASE_URL}/announcements`,
    });
  }
}

export const AnnouncementService = new AnnouncementS();
