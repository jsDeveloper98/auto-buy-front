export interface ICardChild {
  label: string;
  value: string | number;
}

export interface ICard {
  _id: string;
  title: string;
  imgPath: string;
  description?: string;
  children: ICardChild[];
  isClickable?: boolean;
}
