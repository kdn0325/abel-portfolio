import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss"

const Header = () => {
    const headerRef = useRef(null);
    useEffect(()=>{
        const shrinkHeader = () =>{
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                headerRef.current.classList.add(`${styles.shrink}`)
            }else{
                headerRef.current.classList.remove(`${styles.shrink}`)
            }
        }
        window.addEventListener("scroll",shrinkHeader);
        return()=>{
            window.removeEventListener("scroll",shrinkHeader);
        }
    },[])
    return(
        <div className={styles.header} ref={headerRef}>
            <div className={styles.header_wrap}>
                <h1 className={styles.logo}>
                    <Link to="/"><img src={require(`../../Assets/img/portfolio/abel_title.png`)} alt="logo"/></Link>
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