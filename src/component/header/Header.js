import React from "react";
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
    },[headerRef])
    const menu = [
        {title : "Home" , path : "/"},
        {title : "Intro" , path : "/intro"},
        {title : "Project" , path : "/project"},
        {title : "Contact" , path : "/contact"},
    ]
    return(
        <header className={styles.header} ref={headerRef}>
            <div className={styles.header_wrap}>
                <h1 className={styles.logo}>
                    <Link to="/"><img alt="abel_title" src="https://user-images.githubusercontent.com/91298955/161248419-bc807d7e-f379-4f2e-95c4-d31f71cb4727.png"/></Link>
                </h1>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        {
                            menu.map((menu,idx)=>
                                <li key ={menu.title + idx} className={styles.menu_list}>
                                    <Link to={menu.path}>
                                        <a className={styles.link} href={menu.path}>
                                            {menu.title}
                                        </a>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default React.memo(Header);