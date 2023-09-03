import * as React from 'react';
import { useDeleteUser } from '../../hooks/api/users.hook';
import { useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import DeleteUserModal from './DeleteUserModal';

const DeleteUserModalContainer = (props: Props) => {
    const { id } = props;
    const { mutate, isSuccess } = useDeleteUser(id);
    const theme = useTheme();

    const childProps = {
        ...props,
        mutate,
        isSuccess,
        theme,
    };

    return <DeleteUserModal {...childProps} />;
};

DeleteUserModalContainer.defaultProps = {};

interface Props {
    id: string;
    username: string;
    close: Function;
    setNeedRefetch: Dispatch<SetStateAction<boolean>>;
}

export default DeleteUserModalContainer;
