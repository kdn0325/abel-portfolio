import { BrowserRouter} from "react-router-dom";
import styles from "./App.module.scss";
import Header from './component/header/Header';
import Footer from './footer/Footer';
import PageRoutes from './PageRoutes';

const App = () => {
    return (
    <BrowserRouter>
        <div className={styles.wrap}>
            <Header/>
            <PageRoutes/>
            <Footer/>
        </div>
    </BrowserRouter>
    );
};           

export default App;