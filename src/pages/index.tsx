import * as React from 'react';
import { Switch, Theme, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import darkTheme from '../utils/theme/darkTheme';
import lightTheme from '../utils/theme/lightTheme';
import { Dispatch, SetStateAction, useState } from 'react';
import Grid from '../commons/Grid';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { DarkMode, LightMode } from '@mui/icons-material';
import St from '../commons/StyledComponents/CommonStyledComponents.styled';
import { useGetUsers } from '../hooks/api/users.hook';
import { ActionColumn } from '../types/commons/CommonGridFormModal.types';
import { User } from '../types/users/Users.types';
// import backgroundImg from "../assets/img/backgroundImg.jpeg";

const UsersPage: React.FC<{ props: Props }> = ({ props }: { props: Props }) => {
    const {
        queryClient,
        darkMode,
        setDarkMode,
        columns,
        actionColumns,
        theme,
        needRefetch,
        setNeedRefetch,
    } = props;
    return (
        <main>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <St.BackgroundImg />
                    {!darkMode && <St.BackgroundFilter />}
                    <St.SwitchCointainer>
                        <St.SwitchCard>
                            <LightMode style={{ color: '#ffc161' }} />
                            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                            <DarkMode style={{ color: '#ffffff' }} />
                        </St.SwitchCard>
                    </St.SwitchCointainer>
                    <St.GridWrapper style={{ marginTop: '6rem' }}>
                        <Grid
                            title="Users"
                            columns={columns}
                            customActionColumns={actionColumns}
                            needRefetch={needRefetch}
                            setNeedRefetch={setNeedRefetch}
                            fetchHook={useGetUsers}
                            withPagination
                        />
                    </St.GridWrapper>
                </QueryClientProvider>
            </ThemeProvider>
        </main>
    );
};
const UsersPageContainer: React.FC<any> = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const [needRefetch, setNeedRefetch] = useState<boolean>(false);
    const queryClient: QueryClient = new QueryClient();

    const theme = React.useMemo(() => {
        const currentTheme = createTheme(darkMode ? darkTheme : lightTheme);
        return currentTheme;
    }, [darkMode]);

    const columns: Array<any> = [
        {
            id: 'id',
            name: 'id',
            selector: (row: User) => row?.id,
            sortField: 'id',
            sortable: true,
        },
        {
            id: 'login',
            name: 'login',
            selector: (row: User) => row?.login,
            sortField: 'login',
            sortable: true,
        },
    ];

    const actionColumns: ActionColumn[] = [
        {
            id: 'user-detail',
            title: 'Detalle',
            icon: (props: any) => (
                <VisibilityRoundedIcon
                    sx={{ color: `${theme.palette.primary.main}`, cursor: 'pointer' }}
                />
            ),
            onIconClickLink: (row: any) => `/users/${row.login}`,
        },
    ];

    const childProps: Props = {
        columns,
        actionColumns,
        darkMode,
        setDarkMode,
        theme,
        queryClient,
        needRefetch,
        setNeedRefetch,
    };
    return <UsersPage props={childProps} />;
};

interface Props {
    columns: Array<any>;
    actionColumns: ActionColumn[];
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    theme: Theme;
    queryClient: QueryClient;
    needRefetch: boolean;
    setNeedRefetch: Dispatch<SetStateAction<boolean>>;
}

export default UsersPageContainer;
