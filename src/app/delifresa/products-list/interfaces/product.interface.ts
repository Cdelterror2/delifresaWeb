import { Categories } from "../../head-filters/interfaces/categories.type";

export interface ProductI {
  urlImage: string;
  name: string;
  category: Categories;
  price: number;
}
