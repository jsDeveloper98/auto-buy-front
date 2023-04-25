import { request } from "../utils";
import { BASE_URL } from "../constants";
import { IAnnouncement, ISuccessResponse } from "../types";

class AnnouncementS {
  async create(values: FormData, token?: string) {
    return request<ISuccessResponse<IAnnouncement>>({
      serializeToJson: false,
      url: `${BASE_URL}/announcements`,
      options: {
        body: values,
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    });
  }
}

export const AnnouncementService = new AnnouncementS();
