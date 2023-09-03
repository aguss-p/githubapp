import * as React from 'react';
import CustomLoader from './CustomLoader';

const CustomLoaderContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <CustomLoader {...childProps} />;
};

CustomLoaderContainer.defaultProps = {};

interface Props {}

export default CustomLoaderContainer;
