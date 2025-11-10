import { Product } from "../../utils/api/products/types";

export interface CartType {
  [productId: string]: Product;
}
