import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./Page/home/Home";
import Intro from './Page/intro/Intro';
import Project from './Page/project/Project';
import Contact from './Page/contact/Contact';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import "./pageroutes.css"
import { useEffect, useState } from "react";
import Starbucks from './component/starbucks/Starbucks';
import KtAlpha from './component/kt-alpha/KtAlpha';
import SuwonHealth from './component/suwonhealth/SuwonHealth';
import PrevPortfolio from './component/prevportfolio/PrevPortfolio';
import Covid19 from './component/covid19/Covid19';
import Watching from './component/watching/Watching';
import Blog from './component/blog/Blog';
import Portfolio from './component/portfolio/Portfolio';
import Skill from "./Assets/Skill";


const PageRoutes = () => {
    const [skill] = useState(Skill);
    const location = useLocation();
    /* 경로 변경시 기본 스크롤값 복원 */
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
    return (
        <main className="main">
            <TransitionGroup>
                <CSSTransition in={false} key={location.pathname} classNames="fade" timeout={500}>
                    <Routes location={location}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/intro" element={<Intro/>}/>
                        <Route path="/project/*" element={<Project skill={skill}/>}/>
                        <Route path="/project/kt-alpha"  element={<KtAlpha skill={skill}/>}/>
                        <Route path="/project/suwonhealth" element={<SuwonHealth skill={skill}/>}/>
                        <Route path="/project/starbucks" element={<Starbucks skill={skill}/>}/>
                        <Route path="/project/prevportfolio" element={<PrevPortfolio skill={skill}/>}/>
                        <Route path="/project/covid19" element={<Covid19 skill={skill}/>}/>
                        <Route path="/project/watching" element={<Watching skill={skill}/>}/>
                        <Route path="/project/blog" element={<Blog skill={skill}/>}/>
                        <Route path="/project/portfolio" element={<Portfolio skill={skill}/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </main>
    );
};

export default PageRoutes;