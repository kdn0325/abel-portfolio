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
                            <img alt="KT_ALPHA" src="https://user-images.githubusercontent.com/91298955/148898550-8ef0c715-1edf-4d7e-8aba-23d1db8e3a2a.png"/>
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
                        <img alt="suwonpublichealth" src="https://user-images.githubusercontent.com/91298955/148897654-05885afa-fd2b-4aa8-9f99-0a901bc7253a.png"/>
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
                        <img alt="STARBUCKS" src="https://user-images.githubusercontent.com/91298955/148896831-d5585f8f-ff9f-49fc-9b96-599bb9fc38da.png"/>
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
                        <img alt="prevportfolio" src="https://user-images.githubusercontent.com/91298955/148900465-8f2e4fe3-3131-41fa-a2c6-ee7cfae3ce08.png"/>
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
                        <img alt="covid19" src="https://user-images.githubusercontent.com/91298955/148898928-5727cb4d-aec8-4162-8a29-8a838c9cee3f.png"/>
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
                        <img alt="watching" src="https://user-images.githubusercontent.com/91298955/157289751-6a999366-0615-4e3c-83b0-7a6587ac4b93.png"/>
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
                        <img alt="blog" src="https://user-images.githubusercontent.com/91298955/159221721-8e1dc698-7f63-4654-87d5-8801a9a370ab.png"/>
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
                        <img alt="portfolio" src="https://user-images.githubusercontent.com/91298955/161248827-9b397fe0-0f58-4fb8-b9f1-e303d511521d.png"/>
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