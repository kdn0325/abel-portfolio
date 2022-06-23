import styles from "./intro.module.scss"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { SiReact,SiRedux, SiJavascript,SiSass, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
SiExpress, SiMongodb,SiAdobephotoshop,SiAdobeillustrator,SiFigma,SiGithub,SiTypescript,SiNextdotjs,SiGraphql} from 'react-icons/si';
import { GiZeppelin } from "react-icons/gi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Intro = () => {
    const skillDesc = [
    {
        title: "HTML5", 
        txt1: "시맨틱 태그를 적절한 쓰임새에 맞게 사용하고 웹 표준을 준수한 시멘틱 마크업을 작성합니다." ,
        txt2: "검색엔진최적화(SEO)에 대한 이해를 통해 사용자들의 접근성을 높일 수 있습니다.",
    },
    {
        title: "CSS3", 
        txt1: "float, position을 활용한 레이아웃 , flex, grid 웹 표준을 준수한 시멘틱 마크업을 작성합니다." ,
        txt2: "유지보수를 위한 SCSS의 사용 경험이 있고, 부트스트랩을 활용하여 반응형 레이아웃을 적용한 경험이 있습니다", 
    },
    {
        title: "Javascript", 
        txt1: "ES6 문법을 기반으로 DOM,Event 조작을 활용하여 동적인 웹을 구현 할 수 있습니다  ." ,
        txt2: "절차지향/객체지향 함수, 메소드, 클래스, 프로토타입 등 다양하게 활용하고 Ajax를 사용하여 open API를 활용 할 수 있습니다.",
    },
    {
        title: "JQuery", 
        txt1: "동적요소를 위해 jquery를 활용하여 다양한 애니메이션 기능을 구현합니다." ,
        txt2: "플러그인의 활용이 가능하며 순수한 제이쿼리로 코딩이 가능합니다.",
    },
    {
        title: "React", 
        txt1: "React 컴포넌트의 props 흐름을 이해하고, CRUD를 활용하여 사용자 인터페이스의 기능을 구현합니다." ,
        txt2: "React Hook을 활용하여 메모리 누수가 발생하지 않도록 처리하고 메모이제이션을 고려합니다.",
    },
    {
        title: "Design", 
        txt1: "디자인 작업을 위한 Photoshop, Illustratior, Figma, Jeplin 사용 능력이 있습니다." ,
        txt2: "Figma , Zeplin을 활용하여 웹 기획을 구현하고 반응형/적응형 웹 퍼블리싱을 해본 경험이 있습니다.",
    },
    {
        title: "Co-work", 
        txt1: "기획의도에 100% 맞도록 구현하고자 노력합니다." ,
        txt2: "협업을 위한 업무 프로세스를 준수하며 지식을 배우고 공유하고자 합니다.",
    },
    ]
    const skillBox = [
        {
            title: "HTML5",
            skillIco: <SiHtml5 color="#ff5723"/>,
            
        },
        {
            title: "CSS3",
            skillIco: <SiCss3 color="#007bc9"/>,
            
        },
        {
            title: "Javascript",
            skillIco: <SiJavascript color="#f7e018"/>,
            
        },
        {
            title: "Jquery",
            skillIco: <SiJquery color="#2e68a8"/>,
            
        },
        {
            title: "React",
            skillIco: <SiReact color="#61dafb"/>,
            
        },
        {
            title: "SCSS",
            skillIco: <SiSass color="#fe9ae4"/>,
            
        },
        {
            title: "Styled-components",
            skillIco: <SiStyledcomponents color="#fe9ae4"/>,
            
        },
    ]
    const SkillExp = [
        {
            title: "Node.js",
            skillIco: <SiNodedotjs color="#8bc500"/>,
        },
        {
            title: "Express",
            skillIco: <SiExpress color="#007bc9"/>,
        },
        {
            title: "MongoDB",
            skillIco: <SiMongodb color="#13aa52"/>,
        },
        {
            title: "Redux",
            skillIco: <SiRedux color="#764abc"/>,
        },
        {
            title: "TypeScript",
            skillIco: <SiTypescript color="#007acc"/>,
        },
        {
            title: "Next.js",
            skillIco: <SiNextdotjs color="#000000"/>,
        },
        {
            title: "GraphQL",
            skillIco: <SiGraphql color="#e535ab"/>,
        },
    ]

    const tool = [
        {
            title: "Github",
            skillIco: <SiGithub color="#000"/>,
        },
        {
            title: "Figma",
            skillIco: <SiFigma color="#000"/>,
        },
        {
            title: "Photoshop",
            skillIco: <SiAdobephotoshop color="#002036"/>,
        },
        {
            title: "Illustrator",
            skillIco: <SiAdobeillustrator color="330000"/>,
        },
        {
            title: "Zeplin",
            skillIco: <GiZeppelin color="fbbc38"/>,
        },
    ]
    return (
        <section className={styles.intro}>
            <h2 className={styles.title}>INTRO</h2>
            <article className={styles.profile}>
                <div className={styles.profile_img}>
                    <img alt="profile" src="https://user-images.githubusercontent.com/91298955/161258299-ecbaf570-7347-46a3-99c2-57e057466d82.png"/>
                </div>
                <div className={styles.detail}>
                    <ul className={styles.desc}>
                        <li><span>Name:</span>김동녕</li>
                        <li><span>Birth:</span>1996.03.09</li>
                        <li><span>Blog:</span><a href ="https://kdn0325.tistory.com" target="_blank" rel="noreferrer" title="Abel의 블로그 바로가기">Abel의 웹 개발 자습서</a></li>
                        <li><span>Github:</span><a href ="https://github.com/kdn0325" target="_blank" rel="noreferrer" title="Abel의 github 바로가기">Abel의 Github</a></li>
                        <li><span>Phone:</span>010-5520-3071</li>
                        <li><span>Address:</span>경기도 수원시</li>
                    </ul>
                </div>
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>MIND</h3>
            <article className={styles.int}>
                {
                    skillDesc.map((skillInt,idx)=>
                        <dl className={styles.int_box} key={idx}>
                            <dt className={styles.int_tit}>{skillInt.title}</dt>
                            <dd className={styles.int_txt}><CheckCircleIcon style={{marginRight:"5px"}}/>{skillInt.txt1}</dd>
                            <dd className={styles.int_txt}><CheckCircleIcon style={{marginRight:"5px"}}/>{skillInt.txt2}</dd>
                        </dl>
                    )
                }
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Skill</h3>
            <article className={styles.skill}>
                {
                    skillBox.map((skill,idx)=>
                            <div className={styles.skill_box} key={idx}>
                                <span className={styles.skillIco}>{skill.skillIco}</span>
                                <h4>{skill.title}</h4>
                            </div>
                        )
                }
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Skill Experience</h3>
            <article className={styles.skill}>
                {
                    SkillExp.map((skill,idx)=>
                            <div className={styles.skill_box} key={idx}>
                                <span className={styles.skillIco}>{skill.skillIco}</span>
                                <h4>{skill.title}</h4>
                            </div>
                        )
                }
            </article>
            <h3><EmojiEmotionsIcon className={styles.smile}/>Tool</h3>
            <article className={styles.skill}>
                {
                    tool.map((skill,idx)=>
                            <div className={styles.skill_box} key={idx}>
                                <span className={styles.skillIco}>{skill.skillIco}</span>
                                <h4>{skill.title}</h4>
                            </div>
                        )
                }
            </article>
        </section>
    );
};

export default Intro;