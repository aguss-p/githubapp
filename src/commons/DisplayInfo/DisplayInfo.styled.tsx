import { Box, Card, Chip, Grid, Stack, styled } from '@mui/material';

export default {
    InfoWrapper: styled(Grid)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    })),
    InfoStack: styled(Stack)(({ theme }) => ({
        margin: 'auto',
    })),
    InfoHeaderCard: styled(Card)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3px',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: '4rem',
        padding: '1.25rem',
        margin: '1rem',
    })),
    InfoCard: styled(Card)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: '0.5rem',
        padding: '1.25rem',
        margin: '1rem',
    })),
    AvatarContainer: styled(Box)(({ theme }) => ({
        maxWidth: '60px',
        borderRadius: '100%',
        objectFit: 'contain',
    })),
    ChipContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10rem',
    })),
    StatusChip: styled(Chip)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8,
        fontWeight: 700,
        color: theme.palette.common.black,
    })),
};
