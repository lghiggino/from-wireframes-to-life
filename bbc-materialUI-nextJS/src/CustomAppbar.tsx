import React from 'react';
//MUI Imports
import { AppBar, Button, createStyles, makeStyles, Menu, MenuItem, MenuList, Theme, Toolbar } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme : Theme) => {
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    })
});

export default function CustomAppbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>();
    const [anchorElTwo, setAnchorElTwo] = React.useState<null | HTMLElement>();

    const classes = useStyles();

    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElTwo(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorElTwo(null);
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

                <FormControl >
                    <NativeSelect
                        value={state.age}
                        onChange={handleChange}
                        name="age"
                        inputProps={{ 'aria-label': 'age' }}
                    >
                        <option value="">Categoria 1.5</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    {/* <FormHelperText>With visually hidden label</FormHelperText> */}
                </FormControl>


                <div>
                    <Button aria-controls="other-menu" aria-haspopup="true" onClick={handleClick}>
                        Categoria 2
                    </Button>
                    <Menu
                        id="other-menu"
                        anchorEl={anchorElTwo}
                        keepMounted
                        open={Boolean(anchorElTwo)}
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