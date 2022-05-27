import styles from "./project.module.scss";
import {Link} from 'react-router-dom';

const Project = ({skill}) => {
    return (
        <section className={styles.project}>
            <h2 className={styles.title}>PROJECT</h2>
            <div className={styles.projectContainer}>
                <article className={styles.ktalpha}>
                        <div className={styles.Thumnail}>
                            <img alt="KT_ALPHA" src="https://user-images.githubusercontent.com/91298955/148898550-8ef0c715-1edf-4d7e-8aba-23d1db8e3a2a.png"/>
                        </div>
                        <Link className={styles.link} to="kt-alpha">
                            <div className={styles.clickToDetail}>Click to Detail</div>
                            <h3>KT-ALPHA</h3>
                            <p className={styles.desc}>"KT-Alpha Adaptive Web"</p>
                            <ul className={styles.item}>
                                {
                                    skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript" || item.title==="Jquery").map((skills,idx)=>
                                            <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                        )
                                }
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
                                {
                                    skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript" || item.title==="Jquery").map((skills,idx)=>
                                            <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                        )
                                }
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
                            {
                                skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript" || item.title==="Jquery").map((skills,idx)=>
                                        <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                    )
                            }
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
                            {
                                skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript").map((skills,idx)=>
                                        <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                    )
                            }
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
                            {
                                skill.filter(item=>item.title==="React").map((skills,idx)=>
                                        <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                    )
                            }
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
                            {
                                skill.filter(item=>item.title==="React" || item.title==="SCSS").map((skills,idx)=>
                                        <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                    )
                            }
                        </ul>
                    </Link>
                </article>
                <article className={styles.blog}>
                    <div className={styles.Thumnail}>
                        <img alt="blog" src="https://user-images.githubusercontent.com/91298955/168579324-ffb5dc01-6697-4909-b6b2-ed06ad74e036.png"/>
                    </div>  
                    <Link className={styles.link} to="blog">
                        <div className={styles.clickToDetail}>Click to Detail</div>
                        <h3>Blog-App</h3>
                        <p className={styles.desc}>"Blog App"</p>
                        <ul className={styles.item}>
                            {
                                skill.filter(item=>item.title==="React" || item.title==="Node.js" || item.title==="Express" || item.title==="MongoDB").map((skills,idx)=>
                                        <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                    )
                            }
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
                            {
                                skill.filter(item=>item.title==="React" || item.title==="SCSS" || item.title==="Styled-components").map((skills,idx)=>
                                        <li key={idx}><span>{skills.skillIco}</span><h4>{skills.title}</h4></li>
                                    )
                            }
                        </ul>
                    </Link>
                </article>
            </div>
        </section>
    );
};

export default Project;