import styles from "./intro.module.scss"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { SiReact,SiRedux, SiJavascript,SiSass, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
SiExpress, SiMongodb,SiAdobephotoshop,SiAdobeillustrator,SiFigma,SiGithub} from 'react-icons/si'
import { GiZeppelin } from "react-icons/gi";

const Intro = () => {
    return (
        <section className={styles.intro}>
            <h2 className={styles.title}>Introduction</h2>
            <article className={styles.profile}>
                <div className={styles.profile_img}>
                    <img src={require(`../../Assets/img/profile.jpg`)} alt="profile"/>
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
            <h3><SentimentVerySatisfiedIcon className={styles.smile}/>MIND</h3>
            <article className={styles.int}>
                <dl className={styles.int_box}>
                    <dt className={styles.int_tit} title="HTML5">HTML</dt>
                    <dd className={styles.int_txt}>시맨틱 태그를 적절한 쓰임새에 맞게 사용하며 웹표준을 준수한 시멘틱 마크업을 작성합니다.</dd>
                    <dd className={styles.int_txt}>검색엔진최적화<span>(SEO)</span>에 대한 이해를 통해 사용자들의 접근성을 높일 수 있습니다.</dd>
                </dl>
                <dl className={styles.int_box}>
                    <dt className={styles.int_tit} title="CSS3">CSS</dt>
                    <dd className={styles.int_txt}><span>CSS3</span> 속성 사용하며 <span> float, position</span>을 활용한 레이아웃 뿐만 아니라 최신 트렌드<span>flex, grid</span> 시맨틱 태그를 적절한 쓰임새에 맞게 사용하며 웹표준을 준수한 시멘틱 마크업을 작성합니다.</dd>
                    <dd className={styles.int_txt}>유지보수를 위한 <span>(SASS)</span>의 사용 경험이 있습니다.</dd>
                    <dd className={styles.int_txt}>부트스트랩을 활용하여 반응형 레이아웃을 적용한 경험이 있습니다</dd>
                </dl>
                <dl className={styles.int_box}>
                    <dt className={styles.int_tit} title="Javascript">Javascript</dt>
                    <dd className={styles.int_txt}>자바스크립트 <span>ES6</span>문법을 이해하고 활용할 수 있습니다.</dd>
                    <dd className={styles.int_txt}><span>절차지향/객체지향</span>을 이해하며<span> 함수, 메소드, 클래스, 프로토타입</span> 등 다양하게 활용합니다. 그리고 <span>let, const, Arrow Function</span>활용 가능합니다.
                    </dd>
                </dl>
                <dl className={styles.int_box}>
                    <dt className={styles.int_tit} title="jquery">jquery</dt>
                    <dd className={styles.int_txt}>동적요소를 위해 <span>jquery</span>를 활용하여 다양한 애니메이션 기능을 구현합니다.</dd>
                    <dd className={styles.int_txt}>플러그인의 활용이 가능하며 순수한 제이쿼리로 코딩이 가능합니다.</dd>
                </dl>
                <dl className={styles.int_box}>
                    <dt className={styles.int_tit} title="Skills">Design</dt>
                    <dd className={styles.int_txt}>디자인 작업을 위한 <span>Photoshop, Illustratior, Figma, Jeplin</span> 사용 능력이 있습니다.</dd>
                </dl>
                <dl className={styles.int_box}>
                    <dt className={styles.int_tit} title="Coperation Work">Co-work</dt>
                    <dd className={styles.int_txt}>기획의도에 100% 맞도록 구현하고자 노력합니다.</dd>
                    <dd className={styles.int_txt}>반응형, 인터랙션 등 사용자에게 편한 <span>UI/UX</span>를 만드는 것을 추구합니다</dd>
                    <dd className={styles.int_txt}>협업을 위한 업무 프로세스를 준수하며 지식을 배우고 공유하고자 합니다.</dd>
                </dl>
            </article>
            <h3><SentimentVerySatisfiedIcon className={styles.smile}/>Skill</h3>
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
            <h3><SentimentVerySatisfiedIcon className={styles.smile}/>Skill Experience</h3>
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
            <h3><SentimentVerySatisfiedIcon className={styles.smile}/>Tool</h3>
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