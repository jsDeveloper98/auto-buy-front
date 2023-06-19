import { BASE_URL } from "../constants";
import { getUserData, request } from "../utils";
import { IAnnouncement, ISuccessResponse } from "../types";

class UserS {
  async getAnnouncements() {
    const { token, userId } = getUserData();
    return request<ISuccessResponse<IAnnouncement[]>>({
      url: `${BASE_URL}/users/${userId}/announcements`,
      options: {
        headers: { Authorization: `Bearer ${token}` },
      },
    });
  }
}

export const UserService = new UserS();
