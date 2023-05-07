export interface IAuthData {
  token?: string;
  userId?: string;
}

interface IFile {
  url: string;
  path: string;
  filename: string;
}

export interface IAnnouncement {
  _id: string;
  make: string;
  user: string;
  model: string;
  title: string;
  files: IFile[];
  price?: number;
  createdAt: string;
  description: string;
}

// TODO: remove in feature if useless
// export interface ICarsList {
//   brand: string;
//   models: string[];
// }

export interface ISuccessResponse<T> {
  data: T;
  message: string;
}
