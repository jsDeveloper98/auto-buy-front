import { BASE_URL } from "../constants";
import { request } from "../utils";
import { IAnnouncement, ISuccessResponse } from "../types";

class UserS {
  async getAnnouncements(userId?: string) {
    return request<ISuccessResponse<IAnnouncement[]>>({
      url: `${BASE_URL}/users/${userId}/announcements`,
    });
  }
}

export const UserService = new UserS();
