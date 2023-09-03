import * as React from 'react';
import Search from './Search';

const SearchContainer = (props: Props) => {
    const childProps = {
        ...props,
    };

    return <Search {...childProps} />;
};

SearchContainer.defaultPropss = {
    disabled: false,
};

interface Props {
    handleSearchChange: (e: any) => void;
    disabled: boolean;
}

export default SearchContainer;
