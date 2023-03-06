import { IRoutesConfig } from "./types";
import { NotFound } from "../pages/not-found";
import {
  Home,
  Login,
  Register,
  MyAnnouncements,
  CreateAnnouncement,
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
    path: "/login",
    type: "unauthorized",
    Component: Login,
  },
  {
    path: "/register",
    type: "unauthorized",
    Component: Register,
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
];