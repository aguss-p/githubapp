import * as React from 'react';
import { Refresh } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const RefreshButton = (props: Props) => {
    const { refresh, disabled } = props;

    return (
        <IconButton
            disabled={disabled}
            aria-label="refresh"
            onClick={() => {
                refresh(true);
            }}
            sx={{
                backgroundColor: 'transparent',
                border: '1px solid primary',
                color: 'primary.main',
                borderRadius: '4px',
                ':hover': {
                    textDecoration: 'none',
                },
                marginBottom: '-4px',
            }}>
            <Refresh />
        </IconButton>
    );
};

RefreshButton.defaultProps = {};
interface Props {
    refresh: Function;
    disabled?: boolean;
}

export default RefreshButton;
