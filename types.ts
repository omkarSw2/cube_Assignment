export interface ProductProps {
  id: string;
  images: string;
  title: string;
  price: string;
  Asrc: string;
  prescription: string;
  set_Of: string;
  company_Name: string;
  adetives: string;
}
export interface Imageprops {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}
