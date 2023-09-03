import * as React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Box, CircularProgress, SvgIconTypeMap } from '@mui/material';
import St from './Header.styled';
import { ActionHeader } from '../../../types/commons/CommonGridFormModal.types';
import RefreshButton from '../../RefreshButton';

const Header = (props: Props) => {
    const { loading, refetch, title, extraActionsInHeader } = props;
    return (
        <St.Header>
            <St.SideContainer
                flexDirection={{ xs: 'column', sm: 'row' }}
                gap={{ xs: '5px', sm: '2rem' }}>
                <Box sx={{ display: 'flex' }}>
                    <St.GridTitle>{title}</St.GridTitle>
                </Box>
                <RefreshButton refresh={refetch} disabled={loading} />
            </St.SideContainer>
        </St.Header>
    );
};

Header.defaultProps = {};

interface Props {
    Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
        muiName: string;
    };
    loading: boolean;
    refetch: Function;
    title: string;
    extraActionsInHeader?: ActionHeader[];
}

export default Header;
