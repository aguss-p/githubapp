import * as React from 'react';
import { useGetUsers } from '../../hooks/api/users.hook';
import { Box, Icon, Stack } from '@mui/material';
import { ActionColumn } from '../../types/commons/CommonGridFormModal.types';
import Grid from './Grid';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import St from './Grid.styled';
import { Link } from 'gatsby';
// import { Link } from '@reach/router';

const GridContainer = (props: Props) => {
    const {
        columns,
        customActionColumns,
        setNeedRefetch,
        needRefetch,
        fetchHook,
        withPagination = false,
        user,
    } = props;
    const {
        data,
        isLoading,
        refetch,
        page = 0,
        setPage = () => null,
        dataUpdatedAt,
    } = fetchHook(user);
    const [acumulatedPages, setAcumulatesPages] = useState(page + 1);
    const today = new Date();
    const [localLoading, setLocalLoading] = useState(false);
    useEffect(() => {
        if (needRefetch) {
            refetch();
            setNeedRefetch(false);
        }
    }, [needRefetch]);
    useEffect(() => {
        if (page >= acumulatedPages) {
            setAcumulatesPages(acumulatedPages + 1);
        }
    }, [page]);

    useEffect(() => {
        const delayLoader = async (time: number) => {
            await setTimeout(() => {
                setLocalLoading(isLoading);
            }, time);
        };
        if (!isLoading && today.getTime() - (dataUpdatedAt ?? 0) < 1000) {
            delayLoader(1000);
        } else {
            setLocalLoading(isLoading);
        }
    }, [isLoading]);

    const extraColumnsActions = React.useCallback(
        (row: any) =>
            customActionColumns?.map(actionCol => {
                const Icon = actionCol.icon;
                return (
                    <Stack key={row.id} direction="row" spacing={2}>
                        <St.Tooltip title={actionCol.id}>
                            <Link to={`/users/${row.login}/`}>
                                <Box>
                                    <Icon
                                        sx={{ color: 'secondary.main', cursor: 'pointer' }}
                                        row={row}
                                    />
                                </Box>
                            </Link>
                        </St.Tooltip>
                    </Stack>
                );
            }),
        [customActionColumns],
    );
    let finalColumns = columns;
    if (customActionColumns && customActionColumns?.length > 0) {
        finalColumns = columns.concat([
            {
                cell: extraColumnsActions,
                name: 'Actions',
                center: true,
                maxWidth: '200px',
            },
        ]);
    }
    const childProps = {
        ...props,
        data,
        columns: finalColumns,
        isLoading: localLoading,
        refetch,
        page,
        setPage,
        acumulatedPages,
        withPagination,
    };

    return <Grid {...childProps} />;
};

GridContainer.defaultProps = {};

interface Props {
    title: string;
    columns: Array<any>;
    customActionColumns?: ActionColumn[];
    needRefetch: boolean;
    withPagination?: boolean;
    setNeedRefetch: Dispatch<SetStateAction<boolean>>;
    fetchHook: (user?: string) => {
        data: any;
        isLoading: boolean;
        refetch: Function;
        isFetched: boolean;
        setPage?: Function;
        page?: any;
        dataUpdatedAt: number;
    };
    user?: string;
}

export default GridContainer;
