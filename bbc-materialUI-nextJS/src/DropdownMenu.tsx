import React, { useState } from 'react';
import Link from "next/link"
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
                className={styles.button}
            >
                Show Menu
            </button>
        </div>

        {showMenu && 
            <ul className={styles.menu}>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/charts/">charts</Link></li>
                    <li><Link href="/materialUI/">materialUI</Link></li>
                    <li><Link href="/posts/">posts</Link></li>
                    <li><Link href="/typescript/">typescript</Link></li>
            </ul>

        }
        </>
    )
}

export default Dropdown