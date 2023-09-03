import * as React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap, Typography } from '@mui/material';
import St from './HeaderButton.styled';

const HeaderButton = (props: Props) => {
    const { text, handleClick, Icon } = props;

    return (
        <St.HeaderButton variant="outlined" onClick={handleClick}>
            {Icon && <Icon sx={{ fontSize: '20px', mr: '6px' }} />}
            <Typography>{text}</Typography>
        </St.HeaderButton>
    );
};

HeaderButton.defaultProps = {};

interface Props {
    Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
        muiName: string;
    };
    handleClick: () => void;
    text: string;
}

export default HeaderButton;
