import {Routes, Route} from "react-router-dom";
import Home from "./Page/home/Home";
import Intro from './Page/intro/Intro';
import Project from './Page/project/Project';
import Contact from './Page/contact/Contact';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import "./pageroutes.css"
import Starbucks from './component/starbucks/Starbucks';
import KtAlpha from './component/kt-alpha/KtAlpha';
import SuwonHealth from './component/suwonhealth/SuwonHealth';
import PrevPortfolio from './component/prevportfolio/PrevPortfolio';
import Covid19 from './component/covid19/Covid19';
import Watching from './component/watching/Watching';
import Blog from './component/blog/Blog';
import Portfolio from './component/portfolio/Portfolio';

const PageRoutes = () => {
    // const location = useLocation();
    // useEffect(()=>{
    //     window.scrollTo(0,0)
    // },[location])
    return (
        <TransitionGroup>
            <CSSTransition in={false} classNames="fade" timeout={500}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/intro" element={<Intro/>}/>
                    <Route path="/project/*" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/project/kt-alpha" element={<KtAlpha/>}/>
                    <Route path="/project/suwonhealth" element={<SuwonHealth/>}/>
                    <Route path="/project/starbucks" element={<Starbucks/>}/>
                    <Route path="/project/prevportfolio" element={<PrevPortfolio/>}/>
                    <Route path="/project/covid19" element={<Covid19/>}/>
                    <Route path="/project/watching" element={<Watching/>}/>
                    <Route path="/project/blog" element={<Blog/>}/>
                    <Route path="/project/portfolio" element={<Portfolio/>}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default PageRoutes;