import axios, { AxiosError } from "axios";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { PRODUCTS_PER_PAGE } from "../../constants/products";

// ==============================
// Type definitions
// ==============================
export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
  quantity: number;
};

export type Products = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type CategoryList = string[];

// ========================
// API Function definitions
// ========================

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

// ========================
// API Hooks definitions
// ========================

const products = {
  GetProducts: {
    useQuery: (
      page: number,
      priceMin?: number,
      priceMax?: number,
      category?: string,
      sortBy?: string,
      order?: string,
      search?: string,
      options?: UseQueryOptions<Products, AxiosError>
    ) =>
      useQuery({
        queryKey: [
          "products",
          page,
          priceMin,
          priceMax,
          category,
          sortBy,
          order,
          search,
        ],
        queryFn: () =>
          getProductsFn(
            page,
            priceMin,
            priceMax,
            category,
            sortBy,
            order,
            search
          ),
        staleTime: 5 * 60 * 1000,
        ...options,
      }),
  },
  GetCategoryList: {
    useQuery: (options?: UseQueryOptions<CategoryList, AxiosError>) =>
      useQuery({
        queryKey: ["categoryList"],
        queryFn: () => getCategoryListFn(),
        staleTime: 30 * 60 * 1000,
        ...options,
      }),
  },
};

export default products;
