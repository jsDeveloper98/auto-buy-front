import { IRoutesConfig } from "./types";
import {
  Home,
  Login,
  Register,
  NotFound,
  MyAnnouncements,
  CreateAnnouncement,
  AnnouncementDetails,
} from "../pages";

export const routesConfig: IRoutesConfig[] = [
  {
    path: "/*",
    type: "common",
    Component: NotFound,
  },
  {
    path: "/",
    type: "common",
    Component: Home,
  },
  {
    path: "/announcements/:announcementId",
    type: "common",
    Component: AnnouncementDetails,
  },
  {
    path: "/my_announcements",
    type: "authorized",
    Component: MyAnnouncements,
  },
  {
    path: "/create_announcement",
    type: "authorized",
    Component: CreateAnnouncement,
  },
  {
    path: "/my_announcements/:announcementId",
    type: "authorized",
    Component: AnnouncementDetails,
  },
  {
    path: "/login",
    type: "unauthorized",
    Component: Login,
  },
  {
    path: "/register",
    type: "unauthorized",
    Component: Register,
  },
];
