import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: "" }
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            headers?: AxiosRequestConfig["headers"];
            params?: AxiosRequestConfig["params"];
        },
        unknown,
        unknown
    > =>
    async ({ url, method, data, headers, params }) => {
        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                headers,
                params,
            });

            return { data: result.data };
        } catch (axiosError) {
            let err = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({
        baseUrl: import.meta.env.VITE_APP_URL,
    }),
    tagTypes: ["Auth"],
    endpoints: (build) => {
        return {
            login: build.mutation({
                query: (data) => ({
                    url: "/auth/login",
                    method: "post",
                    data,
                }),
            }),
        };
    },
});

export const { useLoginMutation } = apiSlice;
