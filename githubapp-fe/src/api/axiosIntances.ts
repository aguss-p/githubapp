import React from 'react';
import axios, { AxiosInstance } from 'axios';

const axiosTimeout = 30000;

const getAnonInstance = (baseUrl: string) => {
    const anonInstance = axios.create({
        baseURL: baseUrl,
    });

    anonInstance.interceptors.response.use(
        (response: any) => {
            //   if (printRequestResult) logStep('request result: ' + JSON.stringify(response.data));
            return response;
        },
        error => {
            //   handleErrorLogger(error);
            return Promise.reject(error);
        },
    );

    anonInstance.interceptors.request.use(async (config: any) => {
        // if (printRequestConfig) consoleLog('request config:', JSON.stringify(config));
        return config;
    });

    anonInstance.defaults.timeout = axiosTimeout;

    return anonInstance;
};

export const axiosAnonInstance = getAnonInstance(process.env.GATSBY_API_BASEURL??"");
