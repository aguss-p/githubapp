import * as React from 'react';
import { Box } from '@mui/material';
import { SkChase, SkChaseDot } from './CustomLoader.styled';

const CustomLoader = (props: Props) => {
    // const { } = props;

    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            minHeight="200px">
            <SkChase>
                <SkChaseDot />
                <SkChaseDot />
                <SkChaseDot />
                <SkChaseDot />
                <SkChaseDot />
                <SkChaseDot />
            </SkChase>
        </Box>
    );
};

CustomLoader.defaultProps = {};

interface Props {}

export default CustomLoader;
