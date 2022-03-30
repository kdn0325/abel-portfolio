import styles from "./project.module.scss";
import {Link} from 'react-router-dom';
import { SiReact, SiJavascript,SiSass, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
SiExpress, SiMongodb} from 'react-icons/si'

const Project = () => {
    return (
        <section className={styles.project}>
            <h2 className={styles.title}>Project</h2>
            <div className={styles.projectContainer}>
                <article className={styles.ktalpha}>
                        <div className={styles.Thumnail}>
                            <img src={require(`../../Assets/img/ktalpha/screenshot1.png`)} alt="kt-alpha"/>
                        </div>
                        <Link className={styles.link} to="/project/kt-alpha">
                            <div className={styles.clickToDetail}>Click to Detail</div>
                            <h3>KT-ALPHA</h3>
                            <p className={styles.desc}>"KT-Alpha Adaptive Web"</p>
                            <ul className={styles.item}>
                                <li><span><SiHtml5 color="#ff5723"/></span><h4>HTML5</h4></li>
                                <li><span><SiCss3 color="#007bc9"/></span><h4>CSS3</h4></li>
                                <li><span><SiJavascript color="#f7e018"/></span><h4>Javascript</h4></li>
                                <li><span><SiJquery color="#2e68a8"/></span><h4>Jquery</h4></li>
                            </ul>
                        </Link>
                </article>
                <article className={styles.suwonhealth}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/suwonhealth/screenshot1.png`)} alt="suwonhealth"/>
                    </div>
                    <Link className={styles.link} to="suwonhealth">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>수원시 보건소</h3>
                        <p className={styles.desc}>"SuwonPublicHealth Adaptive Web"</p>
                        <ul className={styles.item}>
                            <li><span><SiHtml5 color="#ff5723"/></span><h4>HTML5</h4></li>
                            <li><span><SiCss3 color="#007bc9"/></span><h4>CSS3</h4></li>
                            <li><span><SiJavascript color="#f7e018"/></span><h4>Javascript</h4></li>
                            <li><span><SiJquery color="#2e68a8"/></span><h4>Jquery</h4></li>
                        </ul>
                    </Link>
                </article>
                <article className={styles.starbucks}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/starbucks/screenshot1.png`)} alt="starbucks"/>
                    </div>                    
                    <Link className={styles.link} to="starbucks">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Starbucks Korea</h3>
                        <p className={styles.desc}>"Starbucks Responsive Web"</p>
                        <ul className={styles.item}>
                            <li><span><SiHtml5 color="#ff5723"/></span><h4>HTML5</h4></li>
                            <li><span><SiCss3 color="#007bc9"/></span><h4>CSS3</h4></li>
                            <li><span><SiJavascript color="#f7e018"/></span><h4>Javascript</h4></li>
                            <li><span><SiJquery color="#2e68a8"/></span><h4>Jquery</h4></li>
                        </ul>
                    </Link>
                </article>
                <article className={styles.prevportfolio}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/prevportfolio/screenshot1.png`)} alt="prevportfolio"/>
                    </div>  
                    <Link className={styles.link} to="prevportfolio">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Prev Portfolio</h3>
                        <p className={styles.desc}>"Publisher Portfolio Responsive Web"</p>
                        <ul className={styles.item}>
                            <li><span><SiHtml5 color="#ff5723"/></span><h4>HTML5</h4></li>
                            <li><span><SiCss3 color="#007bc9"/></span><h4>CSS3</h4></li>
                            <li><span><SiJavascript color="#f7e018"/></span><h4>Javascript</h4></li>
                        </ul>
                    </Link>
                </article>
                <article className={styles.covid19}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/covid19/screenshot1.png`)} alt="covid19"/>
                    </div>  
                    <Link className={styles.link} to="covid19">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Covid 19</h3>
                        <p className={styles.desc}>"covid19 Information Service Web"</p>
                        <ul className={styles.item}>
                            <li><span><SiReact color="#61dafb"/></span><h4>React</h4></li>
                        </ul>
                    </Link>
                </article>
                <article className={styles.watching}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/watching/screenshot1.png`)} alt="watching"/>
                    </div>  
                    <Link className={styles.link} to="watching">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Watching</h3>
                        <p className={styles.desc}>"Movie Information Service Web"</p>
                        <ul className={styles.item}>
                        <li><span><SiReact color="#61dafb"/></span><h4>React</h4></li>
                        <li><span><SiSass color="#fe9ae4"/></span><h4>Sass</h4></li>
                        </ul>
                    </Link>
                </article>
                <article className={styles.blog}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/blog/screenshot1.png`)} alt="blog"/>
                    </div>  
                    <Link className={styles.link} to="blog">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Blog-App</h3>
                        <p className={styles.desc}>"Blog App"</p>
                        <ul className={styles.item}>
                            <li><span><SiReact color="#61dafb"/></span><h4>React</h4></li>
                            <li><span><SiNodedotjs color="#8bc500"/></span><h4>Node.js</h4></li>
                            <li><span><SiExpress color="#8bc500"/></span><h4>Express</h4></li>
                            <li><span><SiMongodb color="#13aa52"/></span><h4>Mongodb</h4></li>
                        </ul>
                    </Link>
                </article>
                <article className={styles.portfolio}>
                    <div className={styles.Thumnail}>
                        <img src={require(`../../Assets/img/portfolio/screenshot1.png`)} alt="portfolio"/>
                    </div>  
                    <Link className={styles.link} to="portfolio">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Portfolio</h3>
                        <p className={styles.desc}>"Front-End Portfolio Web"</p>
                        <ul className={styles.item}>
                        <li><span><SiReact color="#61dafb"/></span><h4>React</h4></li>
                        <li><span><SiSass color="#fe9ae4"/></span><h4>Sass</h4></li>
                        <li><span><SiStyledcomponents color="#fe9ae4"/></span><h4>Styled-components</h4></li>
                        </ul>
                    </Link>
                </article>
            </div>
        </section>
    );
};

export default Project;