import { Product } from "../../utils/api/products";

export type CartType = {
  [productId: string]: Product;
};
