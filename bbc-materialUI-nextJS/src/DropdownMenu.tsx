import React, { useState } from 'react';
import styles from '../styles/DropdownMenu.module.css'


//From MaterialUI
// import { makeStyles } from '@material-ui/core';
// const useStyles = makeStyles(theme => ({
//     button: {
//         outline: "2px solid green"
//     },
// }))


function Dropdown(){
    const [showMenu, setShowMenu] = useState(false)
    // const classes = useStyles()

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return(
        <>
        <div>
            <button
                onClick={toggleMenu}
                className={showMenu ? styles.showMenubutton : styles.button}
            >
                Show Menu
            </button>
        </div>

        {showMenu && 
            <div className={styles.menu}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        }
        </>
    )
}

export default Dropdown