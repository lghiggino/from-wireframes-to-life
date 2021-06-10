import React from 'react';
import {Snackbar, SnackbarContent } from '@material-ui/core';

export interface MuiSnackBarProps {
    anchorOrigin: { horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' },
    label: string,
}

export const MuiSnackBar: React.FC<MuiSnackBarProps> = ({
    children,
    ...props
}) => {
    return (
        <Snackbar {...props}>
            <SnackbarContent></SnackbarContent>
        </Snackbar>

    )
}