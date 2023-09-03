import { InputBase, alpha, styled } from '@mui/material';

export default {
    SearchStyled: styled('div')(({ theme }) => ({
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        borderRadius: theme.shape.borderRadius,
        border: `solid 1px ${theme.palette.common.black}`,
        marginLeft: 0,
        minWidth: '120px',
        position: 'relative',
        '&:hover': {
            border: `solid 1px ${theme.palette.primary.main}`,
        },
    })),
    SearchIconWrapper: styled('div')(({ theme }) => ({
        color: theme.palette.primary.main,
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: '0.7rem',
        pointerEvents: 'none',
        position: 'absolute',
    })),
    StyledInputBase: styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            // padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(3)})`,
            paddingTop: '3%',
            alignSelf: 'center',
            color: theme.palette.common.black,

            '&::placeholder': {
                textOverflow: 'ellipsis !important',
                color: theme.palette.common.black,
            },
            width: '100%',
        },
    })),
};
