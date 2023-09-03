import * as React from 'react';
import { Theme, Typography } from '@mui/material';
import St from './DeleteUserModal.styled';
import { Dispatch, SetStateAction } from 'react';

const DeleteUserModal = (props: Props) => {
    const { mutate, isSuccess, theme, id, username, close, setNeedRefetch } = props;

    return (
        <St.ModalContent>
            <St.ModalMessageContainer>
                <Typography variant="subtitle1" color={theme.palette.common.black}>
                    ¿Desea eliminar a
                </Typography>
                <Typography variant="subtitle1" fontWeight={700} color={theme.palette.primary.main}>
                    {username}
                </Typography>
                <Typography variant="subtitle1" color={theme.palette.common.black}>
                    ?
                </Typography>
            </St.ModalMessageContainer>
            <St.ActionButtonContainer>
                <St.ActionButton
                    onClick={async () => {
                        await mutate(id);
                        setNeedRefetch(true);
                        props.close();
                    }}
                    variant="contained">
                    Confirmar
                </St.ActionButton>
                <St.ActionButton variant="contained" onClick={() => close}>
                    Cancelar
                </St.ActionButton>
            </St.ActionButtonContainer>
        </St.ModalContent>
    );
};

DeleteUserModal.defaultProps = {};

interface Props {
    mutate: Function;
    isSuccess: boolean;
    theme: Theme;
    id: string;
    username: string;
    close: Function;
    setNeedRefetch: Dispatch<SetStateAction<boolean>>;
}

export default DeleteUserModal;
