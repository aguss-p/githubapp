import * as React from 'react';
import DisplayInfo from './DisplayInfo';
import { useTheme } from '@mui/material';

const DisplayInfoContainer = (props: Props) => {
    const { fetchHook, user } = props;
    const { data, isLoading } = fetchHook(user);
    const theme = useTheme();
    const childProps = {
        ...props,
        data,
        isLoading,
        theme,
    };

    return <DisplayInfo {...childProps} />;
};

DisplayInfoContainer.defaultProps = {};

interface Props {
    user: string;
    fetchHook: (user: string) => {
        data: any;
        isLoading: boolean;
        refetch: Function;
        isFetched: boolean;
        dataUpdatedAt: number;
    };
}

export default DisplayInfoContainer;
