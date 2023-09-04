import * as React from 'react';
import { Switch, Theme, ThemeProvider, Typography, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import darkTheme from '../../utils/theme/darkTheme';
import lightTheme from '../../utils/theme/lightTheme';
import { Dispatch, SetStateAction, useState } from 'react';
import Grid from '../../commons/Grid';
import { DarkMode, LightMode } from '@mui/icons-material';
import St from '../../commons/StyledComponents/CommonStyledComponents.styled';
import { useGetUserDetails, useGetUserRepositories, useGetUsers } from '../../hooks/api/users.hook';
import { Repositorie } from '../../types/users/Users.types';
import DisplayInfo from '../../commons/DisplayInfo';
import { Link } from 'gatsby';

const UserDetailPage: React.FC<{ props: Props }> = ({ props }: { props: Props }) => {
    const {
        queryClient,
        darkMode,
        setDarkMode,
        columns,
        theme,
        needRefetch,
        setNeedRefetch,
        user,
    } = props;

    return (
        <main>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient} contextSharing={true}>
                    <St.BackgroundImg />
                    <St.PageWrapper>
                        {!darkMode && <St.BackgroundFilter />}
                        <St.UserDetailHeader>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <St.SwitchCard
                                    style={{ backgroundColor: theme.palette.primary.main }}>
                                    <Typography
                                        fontWeight={500}
                                        variant="h5"
                                        color={theme.palette.common.black}>
                                        GO TO USERS
                                    </Typography>
                                </St.SwitchCard>
                            </Link>

                            <St.SwitchCard>
                                <LightMode style={{ color: '#ffc161' }} />
                                <Switch
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <DarkMode style={{ color: '#ffffff' }} />
                            </St.SwitchCard>
                        </St.UserDetailHeader>
                        <St.UserDetailCardContainer>
                            <DisplayInfo fetchHook={useGetUserDetails} user={user ?? ''} />
                        </St.UserDetailCardContainer>
                        <St.GridWrapper>
                            <Grid
                                title="Repositories"
                                columns={columns}
                                needRefetch={needRefetch}
                                setNeedRefetch={setNeedRefetch}
                                fetchHook={() => useGetUserRepositories(user ?? '')}
                                user={user ?? ''}
                            />
                        </St.GridWrapper>
                    </St.PageWrapper>
                </QueryClientProvider>
            </ThemeProvider>
        </main>
    );
};
const UserDetailsContainer: React.FC<any> = ({ params }) => {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const [needRefetch, setNeedRefetch] = useState<boolean>(false);
    const queryClient: QueryClient = new QueryClient();

    const user: string | null = params ? (params.user ?? '').replace('/', '') : '';
    const theme = React.useMemo(() => {
        const currentTheme = createTheme(darkMode ? darkTheme : lightTheme);
        return currentTheme;
    }, [darkMode]);

    const columns: Array<any> = [
        {
            id: 'id',
            name: 'id',
            selector: (row: Repositorie) => row?.id,
            sortField: 'id',
            sortable: true,
        },
        {
            id: 'name',
            name: 'name',
            selector: (row: Repositorie) => row?.name,
            sortField: 'name',
            sortable: true,
        },
        {
            id: 'url',
            name: 'url',
            selector: (row: Repositorie) => row?.url,
            sortField: 'url',
            sortable: true,
        },
    ];

    const childProps: Props = {
        columns,
        darkMode,
        setDarkMode,
        theme,
        queryClient,
        needRefetch,
        setNeedRefetch,
        user,
    };
    return <UserDetailPage props={childProps} />;
};

interface Props {
    columns: Array<any>;
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    theme: Theme;
    queryClient: QueryClient;
    needRefetch: boolean;
    setNeedRefetch: Dispatch<SetStateAction<boolean>>;
    user: string | null;
}

export default UserDetailsContainer;
