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
    endpoints: (build) => ({
        register: build.mutation({
            query: (data) => ({
                url: "/register",
                method: "post",
                data,
            }),
        }),
        login: build.mutation({
            query: (data) => ({
                url: "/login",
                method: "post",
                data,
            }),
        }),

        logout: build.mutation<any, void>({
            query: () => ({
                url: "/logout",
                method: "post",
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
    apiSlice;
