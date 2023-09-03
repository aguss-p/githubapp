import React, { useMemo, useState } from 'react';
import endpoints from '../../api/users/users.api';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetUsers = () => {
    const [page, setPage] = useState<number>(1);

    const { data, isFetching, isLoading, refetch, isFetched, dataUpdatedAt, status } = useQuery(
        ['users', page],
        () => endpoints.getUsers(page),
        {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,
            retryDelay: 3000,
        },
    );
    return {
        data: data?.data,
        isLoading: isLoading || isFetching,
        refetch,
        isFetched,
        setPage,
        page,
        dataUpdatedAt,
    };
};
export const useGetUserDetails = (user: string) => {
    const { data, isFetching, isLoading, refetch, isFetched, dataUpdatedAt, status } = useQuery(
        ['users'],
        () => endpoints.getUserDetails(user),
    );
    return {
        data: data?.data,
        isLoading: isLoading || isFetching,
        refetch,
        isFetched,
        dataUpdatedAt,
    };
};
export const useGetUserRepositories = (user: string) => {
    const { data, isFetching, isLoading, refetch, isFetched, dataUpdatedAt, status } = useQuery(
        ['users', user],
        () => endpoints.getUserRepos(user),
        {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,
            retryDelay: 3000,
        },
    );
    return {
        data: data?.data,
        isLoading: isLoading || isFetching,
        refetch,
        isFetched,
        dataUpdatedAt,
    };
};
