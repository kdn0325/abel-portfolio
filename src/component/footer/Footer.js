import { useEffect, useState } from 'react';
import styles from "./Footer.module.scss";

// Footer 추가  - 05/22
const Footer = () => {
    const [date,setDate] = useState();
    useEffect(()=>{
        setDate(new Date().getFullYear());
    },[]);
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrap}>
                <address className={styles.address}>
                Copyright© {date} Abel's Portfolio. All rights reserved
                </address>
            </div>
        </footer>
    );
};

export default Footer;