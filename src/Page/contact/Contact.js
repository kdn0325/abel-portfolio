import styles from "./contact.module.scss";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useRef } from "react";

const Contact = () => {
    /* 복사 */
    const copyref = useRef("")
    const copy = (text) =>{
        if(!document.queryCommandSupported("copy")){
            return alert("복사가 지원되지 않습니다")
        }
        const textarea = document.createElement("textarea")
        textarea.value = text;
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea);
        alert("클립보드가 복사되었습니다")
        copyref.current.focus()
    }
    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>CONTACT</h2>
            <article className={styles.articleContact}>
                <ul>
                    <li><AccountBoxIcon className={styles.contactIco}/>Dong-Nyeong-Kim</li>
                    <li><LocationOnIcon className={styles.contactIco}/>Suwon-si Gyeonggi-do, Korea</li>
                    <li><PhoneIphoneIcon className={styles.contactIco}/>010-5520-3071
                        <button onClick={()=>copy("01055203071")} name="복사하기"><ContentCopyIcon className={styles.ico}/></button>
                    </li>
                    <li><EmailIcon className={styles.contactIco}/>
                        <a href ="mailto:sexy-ehdsud@nate.com" title="주소로 이메일 전송">sexy-ehdsud@nate.com</a>
                        <button onClick={()=>copy("sexy-ehdsud@nate.com")} ref={copyref} name="복사하기">
                            <ContentCopyIcon className={styles.ico}/>
                        </button>
                    </li>
                    <li><HomeIcon className={styles.contactIco}/>
                        <a href ="https://kdn0325.tistory.com" target="_blank" rel="noreferrer" title="Abel의 블로그 바로가기">Blog</a>
                    </li>
                    <li><GitHubIcon className={styles.contactIco}/>
                        <a href ="https://github.com/kdn0325" target="_blank" rel="noreferrer" title="Abel의 github 바로가기">Github</a>
                    </li>
                </ul>
            </article>
            <article className={styles.articleContact}>
                <ul>
                    <li><CheckCircleIcon className={styles.circle}/>웹을 구현하면서 어떤 것이 더 효율적인지 비교하고 항상 더 나은 사용자 편의성을 추구합니다.</li>
                    <li><CheckCircleIcon className={styles.circle}/>무언가를 새롭게 알게되고, 습득해서 활용하는 과정을 항상 즐겁게 생각합니다.</li>
                    <li><CheckCircleIcon className={styles.circle}/>항상 도전을 통해 유연한 사고를 갖고 계속해서 배움을 통해 성장하고 싶습니다.</li>
                </ul>
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Education</h3>
            <article className={styles.articleContact}>
                <ul className={styles.completion}>
                    <li>디지털웹/앱디자인 교육과정
                        <a target="_blank" rel="noreferrer" href="https://kdn0325.github.io/publisherCompletion/">수료</a>
                    </li>
                    <li>VanilaJS 교육과정
                        <a target="_blank" rel="noreferrer" href="https://kdn0325.github.io/VanilaCompletion/">수료</a>
                    </li>
                    
                    <li>ReactJS 교육과정
                        <a target="_blank" rel="noreferrer" href="https://kdn0325.github.io/reactCompletion/">수료</a>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default Contact;