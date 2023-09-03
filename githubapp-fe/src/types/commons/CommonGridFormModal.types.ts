import { AlertColor } from '@mui/material';
import { FunctionComponent } from 'react';

export interface CustomIconProps {
    sx: { color: string; cursor: string };
    row: any;
}
export interface ActionColumn {
    id: string;
    title: string;
    component?: FunctionComponent;
    icon: (props: CustomIconProps) => JSX.Element;
    onIconClickLink: (row: any) => string;
}

export interface ActionHeader {
    id: string;
    component: FunctionComponent;
}
