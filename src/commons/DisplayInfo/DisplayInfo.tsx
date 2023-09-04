import * as React from 'react';
import { Grid, Stack, Typography, Theme } from '@mui/material';
import St from './DisplayInfo.styled';
import CustomLoader from '../CustomLoader';

const DisplayInfo = (props: Props) => {
    const { data, isLoading, theme } = props;

    return (
        <St.InfoWrapper container>
            {isLoading ? (
                Array(4).map(i => (
                    <Grid key={i} xs={12} sm={12} md={6} lg={3}>
                        <CustomLoader />
                    </Grid>
                ))
            ) : (
                <>
                    <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid xs={12} md={4}>
                            <St.InfoHeaderCard>
                                <Grid xs={5} md={6}>
                                    <St.AvatarContainer>
                                        <img
                                            style={{ borderRadius: '100%', marginTop: '4px' }}
                                            width={'70px'}
                                            height={'70px'}
                                            src={data?.header?.avatar}
                                        />
                                    </St.AvatarContainer>
                                </Grid>
                                <Grid xs={7} md={8}>
                                    <Typography
                                        fontWeight={600}
                                        variant="h4"
                                        color={theme.palette.primary.main}>
                                        {data?.header?.login}
                                    </Typography>
                                </Grid>
                            </St.InfoHeaderCard>
                        </Grid>
                    </Grid>
                    {data?.info?.map((info: { label: string; value: any }) => (
                        <Grid
                            key={info.value}
                            xs={12}
                            sm={12}
                            md={info.label === 'ID:' ? 4 : info.label === 'Profile URL:' ? 8 : 6}
                            lg={info.label === 'ID:' ? 2 : info.label === 'Profile URL:' ? 4 : 3}>
                            <St.InfoCard>
                                <Stack>
                                    <Typography
                                        fontWeight={500}
                                        variant="subtitle1"
                                        color={theme.palette.common.black}>
                                        {info?.label}
                                    </Typography>
                                </Stack>
                                <St.InfoStack>
                                    <Typography
                                        fontWeight={600}
                                        fontSize="18px"
                                        variant="subtitle1"
                                        color={theme.palette.common.black}>
                                        {info?.value}
                                    </Typography>
                                </St.InfoStack>
                            </St.InfoCard>
                        </Grid>
                    ))}
                </>
            )}
        </St.InfoWrapper>
    );
};
DisplayInfo.defaultProps = {};
interface Props {
    data: {
        header: { avatar: string; login: string };
        info: Array<{ label: string; value: any }>;
    };
    isLoading: boolean;
    theme: Theme;
}

export default DisplayInfo;
