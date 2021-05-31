import React from 'react';
//MUI Imports
import { AppBar, Button, Menu, MenuItem, MenuList, Toolbar } from '@material-ui/core'

export default function CustomAppbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar>
            <Toolbar>
                Site Name Teste 
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="secondary" variant="contained">
                        Categoria 1
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Categoria 2
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Banana</MenuItem>
                        <MenuItem onClick={handleClose}>Apple</MenuItem>
                        <MenuItem onClick={handleClose}>Pineapple</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}