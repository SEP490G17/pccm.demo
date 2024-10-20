import exp from "constants";

export interface ICourt {
  id: number;
  title: string;
  location: ILocation;
  emptyCourt: string[];
  services: IServices[];
  href: string;
  image: string;
}

export interface IServices {
  id: number;
  name: string;
}

export interface ILocation {
  tinh: string;
  thanhpho: string;
  diachi: string;
}
