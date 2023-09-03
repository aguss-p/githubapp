import { styled, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default {
    ActionButtonContainer: styled('div')(({ theme }) => ({
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.8rem',
    })),
    ActionButton: styled(LoadingButton)(({ theme }) => ({
        padding: '4px 10px 4px 10px',
        backgroundColor: theme.palette.primary.main,
        color: '#F7F7F7',
        borderRadius: '2rem',
    })),
    ModalContent: styled('div')(({ theme }) => ({})),
    ModalMessageContainer: styled(Button)(({ theme }) => ({
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
    })),
};
