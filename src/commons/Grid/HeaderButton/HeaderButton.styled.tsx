import { Button, styled } from '@mui/material';
export default {
    HeaderButton: styled(Button)(({ theme }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '5px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: '.5s',
        border: `2px solid ${theme.palette.primary.main}`,

        // width: '20rem',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: 'rgba(0, 20, 65, 0.04)',
            border: `2.5px solid ${theme.palette.primary.main}`,
        },
    })) as typeof Button,
};
