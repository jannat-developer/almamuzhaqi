// src/features/api/baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://172.252.13.69:8601/api/v1",
    credentials: "omit",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token") || Cookies?.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["User"],
});

// Export hooks for usage in functional components
export default baseApi;
