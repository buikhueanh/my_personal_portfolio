import React, {useState} from 'react'

import styles from "./Navbar.module.css"
import getImageURL from "../../utils"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>
            Anh Khue Bui
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={menuOpen 
                        ? getImageURL("nav/closeIcon.png")
                        : getImageURL("nav/menuIcon.png")} 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                    <li className={styles.navItem}> 
                        <a href="#about">About</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#exp">Experience</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#proj">Projects</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        
        </nav>
    )
}

export default Navbar
