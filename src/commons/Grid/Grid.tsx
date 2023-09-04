import * as React from 'react';
// import FadeIn from '../FadeIn';
import St from './Grid.styled';
import CustomLoader from '../CustomLoader';
import Header from './Header';
import { TableColumn } from 'react-data-table-component';

const Grid = (props: Props) => {
    const {
        data,
        page,
        setPage,
        columns,
        isLoading,
        refetch,
        title,
        acumulatedPages,
        withPagination,
    } = props;
    return (
        <St.Card>
            <Header title={title} refetch={refetch} loading={isLoading} />
            {isLoading ? (
                <CustomLoader />
            ) : (
                <>
                    {data === null ? (
                        <St.ChipContainer>
                            <St.StatusChip
                                label="Error try again later."
                                sx={{ borderRadius: '2rem !important' }}
                            />
                        </St.ChipContainer>
                    ) : (data?.length ?? 0) === 0 ? (
                        <St.ChipContainer>
                            <St.StatusChip
                                label={`"Not ${title.toLocaleLowerCase()} found.`}
                                sx={{ borderRadius: '2rem !important' }}
                            />
                        </St.ChipContainer>
                    ) : (
                        <St.DataTableStyled
                            customStyles={{
                                rows: { style: { fontFamily: 'Roboto, sans-serif !important' } },
                                headCells: {
                                    style: { fontFamily: 'Roboto, sans-serif !important' },
                                },
                            }}
                            responsive={true}
                            data={data}
                            columns={columns}
                        />
                    )}
                </>
            )}
            {withPagination && (
                <St.Pagination
                    onChange={(event: React.ChangeEvent<unknown>, value: number) => {
                        setPage(value);
                    }}
                    page={page}
                    color="primary"
                    title="Page"
                    count={acumulatedPages}
                    siblingCount={0}
                />
            )}
        </St.Card>
    );
};

Grid.defaultProps = {};

interface Props {
    data: Array<unknown>;
    columns: TableColumn<unknown>[];
    isLoading: boolean;
    refetch: Function;
    title: string;
    setPage: Function;
    page: number;
    acumulatedPages: number;
    withPagination: boolean;
}

export default Grid;
