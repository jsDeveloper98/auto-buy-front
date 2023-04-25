export interface IRegisterData {
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

export interface ICarMake {
  id: number;
  name: string;
}

export interface ICarModel {
  id: number;
  name: string;
  make_id: number;
}

export interface ISuccessResponse<T> {
  data: T;
  message: string;
}
