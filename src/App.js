import { BrowserRouter} from "react-router-dom";
import "./App.module.scss"
import styles from "./App.module.scss";
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Main from './Main';


const App = () => {
    return (
    <BrowserRouter>
        <div className={styles.wrap}>
            {/* Reset 초기화 05/27 */}
            <Header/>
            <Main/>
            <Footer/>
        </div>
    </BrowserRouter>
    );
};           

export default App;