export interface IAuthData {
  token?: string;
  userId?: string;
}

export interface IFile {
  url: string;
  path: string;
  filename: string;
}

export interface IAnnouncement {
  _id: string;
  year: number;
  make: string;
  user: string;
  model: string;
  title: string;
  price: number;
  images: IFile[];
  createdAt: string;
  description: string;
}

export interface ISuccessResponse<T> {
  data: T;
  message: string;
}
