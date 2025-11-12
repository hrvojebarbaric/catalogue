import axios from "axios";
import { PRODUCTS_PER_PAGE } from "../../constants/products";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProductsFn(
  page: number,
  priceMin?: number,
  priceMax?: number,
  category?: string,
  sortBy?: string,
  order?: string,
  search?: string
) {
  const productsResult = PRODUCTS_PER_PAGE * page;
  const skipProducts = productsResult - PRODUCTS_PER_PAGE;

  const searchUrl = `search?q=${search}`;
  const categoryUrl = `category/${category}`;
  const paginationUrl = `limit=${PRODUCTS_PER_PAGE}&skip=${skipProducts}`;
  const sortByUrl = `sortBy=${sortBy}&order=${order}`;

  let productUrl;

  if (category && category !== "all") {
    productUrl = `${API_BASE_URL}/products/${categoryUrl}?${paginationUrl}&${sortByUrl}`;
  } else if (search) {
    productUrl = `${API_BASE_URL}/products/${searchUrl}&${paginationUrl}&${sortByUrl}`;
  } else if (!(priceMin === 0 && priceMax === 501)) {
    productUrl = `${API_BASE_URL}/products?limit=0&${categoryUrl}&${sortByUrl}`;
  } else {
    productUrl = `${API_BASE_URL}/products?${paginationUrl}&${sortByUrl}`;
  }

  return (await axios.get(productUrl)).data;
}

export async function getCategoryListFn() {
  return (await axios.get(`${API_BASE_URL}/products/category-list`)).data;
}
