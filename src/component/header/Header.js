import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss"

const Header = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0 ? false : true)
        return () => (window.onscroll = null);
    }
    return(
        <div className={`${isScrolled ? `${styles.header} ${styles.scrollheader}` : styles.header}`}>
            <div className={styles.header_wrap}>
                <h1 className={styles.logo}>
                    <a href="/"><img src={require(`../../Assets/img/portfolio/abel_title.png`)} alt="logo"/></a>
                </h1>
                <ul className={styles.menu}>
                    <li className={styles.menu_list}>
                        <Link to="/" className={styles.link} >Home</Link>
                    </li>
                    <li className={styles.menu_list}>
                        <Link to="/intro" className={styles.link}>Intro</Link>
                    </li>
                    <li className={styles.menu_list}>
                        <Link to="/project" className={styles.link}>Project</Link>
                    </li>
                    <li className={styles.menu_list}>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;