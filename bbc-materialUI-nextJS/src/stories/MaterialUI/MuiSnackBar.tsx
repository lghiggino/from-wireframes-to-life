import React from 'react';
import { Button, IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

export interface MuiSnackBarProps {
    message: string,
    severity: "error" | "warning" | "info" | "success",
    variant: "filled" | "outlined" | "standard"
    horizontalAnchor: 'center' | 'left' | 'right',
    verticalAnchor: 'bottom' | 'top',
    anchorOrigin: { horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' },
    autoHideDuration: number,
    elevation: number,
}


export const MuiSnackBar: React.FC<MuiSnackBarProps> = ({
    children,
    message = "Oi, eu sou a mensagem do snackbar",
    horizontalAnchor = "bottom",
    verticalAnchor = "left",
    autoHideDuration = 60000,
    severity = "success",
    elevation = 24,
    variant = "filled",
    ...props
}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={elevation} variant={variant} {...props} />;
    }

    return (
        <div>
            <Button color="primary" variant="contained" onClick={handleOpen}>Abrir SnackBar - Btn precisa ser excluido em prod</Button>
            <Snackbar
                {...props}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={autoHideDuration}
                onClose={handleClose}
                message={message}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}