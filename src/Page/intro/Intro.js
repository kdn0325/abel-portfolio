import styles from "./intro.module.scss"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { SiReact,SiRedux, SiJavascript,SiSass, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
SiExpress, SiMongodb,SiAdobephotoshop,SiAdobeillustrator,SiFigma,SiGithub} from 'react-icons/si'
import { GiZeppelin } from "react-icons/gi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Intro = () => {
    const skill = [
    {
        title: "HTML5", 
        txt1: "시맨틱 태그를 적절한 쓰임새에 맞게 사용하며 웹표준을 준수한 시멘틱 마크업을 작성합니다." ,
        txt2:"검색엔진최적화(SEO)에 대한 이해를 통해 사용자들의 접근성을 높일 수 있습니다.",
    },
    {
        title: "CSS3", 
        txt1: "float, position을 활용한 레이아웃 , flex, grid 웹 표준을 준수한 시멘틱 마크업을 작성합니다." ,
        txt2: "유지보수를 위한 SASS의 사용 경험이 있고, 부트스트랩을 활용하여 반응형 레이아웃을 적용한 경험이 있습니다", 
    },
    {
        title: "Javascript", 
        txt1: "자바스크립트 ES6 문법을 이해하고 활용할 수 있습니다." ,
        txt2: "절차지향/객체지향 함수, 메소드, 클래스, 프로토타입 등 다양하게 활용합니다. 그리고 let, const, Arrow 활용 가능합니다.",
    },
    {
        title: "Jquery", 
        txt1: "동적요소를 위해 jquery를 활용하여 다양한 애니메이션 기능을 구현합니다." ,
        txt2: "플러그인의 활용이 가능하며 순수한 제이쿼리로 코딩이 가능합니다.",
    },
    {
        title: "React", 
        txt1: "동적요소를 위해 jquery를 활용하여 다양한 애니메이션 기능을 구현합니다." ,
        txt2: "플러그인의 활용이 가능하며 순수한 제이쿼리로 코딩이 가능합니다.",
    },
    {
        title: "Design", 
        txt1: "디자인 작업을 위한 Photoshop, Illustratior, Figma, Jeplin 사용 능력이 있습니다." ,
        txt2: "검색엔진최적화(SEO)에 대한 이해를 통해 사용자들의 접근성을 높일 수 있습니다.",
    },
    {
        title: "Co-work", 
        txt1: "기획의도에 100% 맞도록 구현하고자 노력합니다." ,
        txt2: "협업을 위한 업무 프로세스를 준수하며 지식을 배우고 공유하고자 합니다.",
    },
    ]
    
    return (
        <section className={styles.intro}>
            <h2 className={styles.title}>Introduction</h2>
            <article className={styles.profile}>
                <div className={styles.profile_img}>
                    <img alt="profile" src="https://user-images.githubusercontent.com/91298955/161258299-ecbaf570-7347-46a3-99c2-57e057466d82.png"/>
                </div>
                <div className={styles.detail}>
                    <ul className={styles.desc}>
                        <li><span>Name:</span>김동녕</li>
                        <li><span>Birth:</span>1996.03.09</li>
                        <li><span>E-mail:</span>sexy-ehdsud@nate.com</li>
                        <li><span>Blog:</span>https://kdn0325.tistory.com/</li>
                        <li><span>Phone:</span>010-5520-3071</li>
                        <li><span>Address:</span>경기도 수원시</li>
                    </ul>
                </div>
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>MIND</h3>
            <article className={styles.int}>
                {
                    skill.map(skillInt=>
                        <dl className={styles.int_box}>
                            <dt className={styles.int_tit}>{skillInt.title}</dt>
                            <dd className={styles.int_txt}><CheckCircleIcon style={{marginRight:"5px"}}/>{skillInt.txt1}</dd>
                            <dd className={styles.int_txt}><CheckCircleIcon style={{marginRight:"5px"}}/>{skillInt.txt2}</dd>
                        </dl>
                    )
                }
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Skill</h3>
            <article className={styles.skill}>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiHtml5 color="#ff5723"/></span>
                    <h4>HTML5</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiCss3 color="#007bc9"/></span>
                    <h4>CSS3</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiJavascript color="#f7e018"/></span>
                    <h4>Javascript</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiJquery color="#2e68a8"/></span>
                    <h4>JQuery</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiReact color="#61dafb"/></span>
                    <h4>React</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiSass color="#fe9ae4"/></span>
                    <h4>SCSS</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiStyledcomponents color="#fe9ae4"/></span>
                    <h4>Styled-components</h4> 
                </div>
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Skill Experience</h3>
            <article className={styles.skill}>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiNodedotjs color="#8bc500"/></span>
                    <h4>Node.js</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiExpress color="#007bc9"/></span>
                    <h4>Express</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiMongodb color="#13aa52"/></span>
                    <h4>MongoDB</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiRedux color="#764abc"/></span>
                    <h4>Redux</h4> 
                </div>
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Tool</h3>
            <article className={styles.skill}>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiGithub color="#000"/></span>
                    <h4>Github</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiFigma color="#000"/></span>
                    <h4>Figma</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiAdobephotoshop color="#002036"/></span>
                    <h4>Photoshop</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><SiAdobeillustrator color="330000"/></span>
                    <h4>Illustrator</h4> 
                </div>
                <div className={styles.skill_box}>
                    <span className={styles.skillIco}><GiZeppelin color="fbbc38"/></span>
                    <h4>Zeplin</h4> 
                </div>
            </article>
        </section>
    );
};

export default Intro;