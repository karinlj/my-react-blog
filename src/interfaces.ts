export interface IHeaderBarProps {
  isBtnOpen: boolean;
  toggleOpen(): void;
}

export interface IPost {
  title: string;
  body: string;
  author: string;
  id?: number;
}
