import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss"

const Header = () => {
    const headerRef = useRef(null);
    const menu = [
        {title : "HOME" , path : "/"},
        {title : "INTRO" , path : "/intro"},
        {title : "PROJECT" , path : "/project"},
        {title : "CONTACT" , path : "/contact"},
    ]
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
    return(
        <header className={styles.header} ref={headerRef}>
            {/* 시맨틱 태그로 변경 05/22 */}
            <div className={styles.header_wrap}>
                <h1 className={styles.logo}>
                    <Link to="/" title="abel-portfolio"><img alt="abel-portfolio" src="https://user-images.githubusercontent.com/91298955/161248419-bc807d7e-f379-4f2e-95c4-d31f71cb4727.png"/></Link>
                </h1>
                    <nav>
                        <ul className={styles.menu}>
                            {
                                menu.map((menu,idx)=>
                                    <li key ={menu.title + idx} className={styles.menu_list}>
                                        <Link to={menu.path} className={styles.link} href={menu.path} title={menu.title}>
                                                {menu.title}
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