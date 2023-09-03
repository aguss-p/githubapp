import { Box, Card, Chip, Pagination, Theme, Tooltip, Typography, styled } from '@mui/material';
import React from 'react';
import DataTable from 'react-data-table-component';
const ToBeStyledTooltip = ({ className, ...props }: any) => (
    <Tooltip {...props} classes={{ tooltip: className }} />
);
export default {
    Card: styled(Card)(({ theme }) =>
        theme.unstable_sx({
            zIndex: 99,
            borderRadius: '12px',
            backgroundColor: theme.palette.common.white,
            maxHeight: {
                xs: 'calc(100vh - 49rem)',
                md: 'calc(100vh - 23rem)',
                lg: 'calc(100vh - 14.5rem)',
            },
            '>div': {
                borderRadius: 'unset',
            },
        }),
    ),
    Pagination: styled(Pagination)(({ theme }) => ({
        padding: '1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // '>ul>li>button': {
        //     color: theme.palette.common.black,
        // },
        '>ul>li>*': {
            color: theme.palette.common.black,
        },
    })),
    ChipContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10rem',
    })),
    StatusChip: styled(Chip)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8,
        fontWeight: 700,
        color: theme.palette.common.black,
    })),
    Tooltip: styled(ToBeStyledTooltip)(({ theme }) => ({
        color: '#F7F7F7',
        // '& .MuiTooltip-arrow': {
        //     color: `${theme.palette.common.black} !important`,
        // },
    })),
    DataTableStyled: styled(DataTable)(
        ({ theme }) =>
            `
   
        .rdt_TableBody {
            max-height:600px;
            overflow:auto;
            padding-bottom: 0.7rem;
            background-color: ${theme.palette.common.white};
        }

        .rdt_TableHeadRow {
            background-color: ${theme.palette.common.white};
            color:  ${theme.palette.common.black};
            border-color:${theme.palette.common.black};
            font-weight: 600;
            .rdt_TableCol_Sortable {
                text-transform: uppercase;
            }
        }
        .rdt_TableRow {
            background-color: ${theme.palette.common.white};
            color:  ${theme.palette.common.black};
            border-color:${theme.palette.common.black};
            &:hover {
                background: rgba(0, 0, 0, 0.04);
            }
            min-height: 32px;
        }

        .rdt_TableCol {
            justify-content: center;
            min-width: max-content;
        }

        .rdt_TableCell {
            padding: '0px';
        }
        .rdt_TableCell:last-child {
            border-right: none;
        }
    `,
    ),
};
