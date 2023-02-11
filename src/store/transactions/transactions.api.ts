import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IObject } from "../../models/interfaces";

export const transactionsApi = createApi({
  reducerPath: "fetchData/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getData: build.query<IObject[], string>({
      query: () => ({
        url: `/data`,
      }),
      transformResponse: (response: IObject[]) => response,
    }),
  }),
});

export const { useGetDataQuery } = transactionsApi;
