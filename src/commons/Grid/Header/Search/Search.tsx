import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import St from './Search.styled';

const Search = (props: Props) => {
    const { disabled, handleSearchChange } = props;
    return (
        <St.SearchStyled>
            <St.SearchIconWrapper>
                <SearchIcon />
            </St.SearchIconWrapper>
            <St.StyledInputBase
                disabled={disabled}
                placeholder={'Buscar'}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange}
            />
        </St.SearchStyled>
    );
};

Search.defaultProps = {};

interface Props {
    handleSearchChange: (e: any) => void;
    disabled: boolean;
}

export default Search;
