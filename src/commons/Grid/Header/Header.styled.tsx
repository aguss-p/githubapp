import { Box, Typography, styled } from '@mui/material';
export default {
    Header: styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        backgroundColor: theme.palette.common.white,
    })),
    GridTitle: styled(Typography)(({ theme }) =>
        theme.unstable_sx({
            fontFamily: `'Montserrat', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '1.4rem',
            color: theme.palette.primary.main,
            fontVariant: 'all-small-caps',
            letterSpacing: '0.05rem',
            alignSelf: 'center',
        }),
    ),
    SideContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    })),
};
