import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CategoryList, Products } from "./types";
import { getCategoryListFn, getProductsFn } from "./functions";

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
