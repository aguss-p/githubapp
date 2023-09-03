import { Box as MuiBox, keyframes, styled } from '@mui/material';

const skChaseFrame = keyframes`
    100% { transform: rotate(360deg); } 
`;
const skChaseDotFrame = keyframes`
    80%, 100% { transform: rotate(360deg); }     
`;
const skChaseDotBeforeFrame = keyframes`
50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  }      
`;
export const Box = styled(MuiBox)(({ theme }) => ({}));
export const SkChase = styled('div')(({ theme }) => ({
    width: '50px',
    height: '50px',
    position: 'relative',
    animation: `${skChaseFrame} 2.5s infinite linear both`,
}));
export const SkChaseDot = styled(MuiBox)(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    animation: `${skChaseDotFrame} 2.0s infinite ease-in-out both`,
    '&::before': {
        content: '""',
        display: 'block',
        width: '25%',
        height: '25%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '100%',
        animation: `${skChaseDotBeforeFrame} 2.0s infinite ease-in-out both`,
    },
    '&>*:nth-of-type(1)': {
        animationDelay: '-1.1s',
    },
    '&>*:nth-of-type(2)': {
        animationDelay: '-1.0s',
    },
    '&>*:nth-of-type(3)': {
        animationDelay: '-0.9s',
    },
    '&>*:nth-of-type(4)': {
        animationDelay: '-0.4s',
    },
    '&>*:nth-of-type(5)': {
        animationDelay: '-0.5s',
    },
    '&>*:nth-of-type(6)': {
        animationDelay: '-0.6s',
    },
    '&>*:nth-of-type(1):before': {
        animationDelay: '-1.1s',
    },
    '&>*:nth-of-type(2):before': {
        animationDelay: '-1.0s',
    },
    '&>*:nth-of-type(3):before': {
        animationDelay: '-0.9s',
    },
    '&>*:nth-of-type(4):before': {
        animationDelay: '-0.4s',
    },
    '&>*:nth-of-type(5):before': {
        animationDelay: '-0.5s',
    },
    '&>*:nth-of-type(6):before': {
        animationDelay: '-0.6s',
    },
}));
