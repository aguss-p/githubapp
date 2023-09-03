import * as React from 'react';
import HeaderButton from './HeaderButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

const HeaderButtonContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <HeaderButton {...childProps} />;
};

HeaderButtonContainer.defaultProps = {};

interface Props {
    Icon?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
        muiName: string;
    };
    handleClick: () => void;
    text: string;
}

export default HeaderButtonContainer;
