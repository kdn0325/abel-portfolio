import React from 'react';
import { BrowserRouter} from "react-router-dom";
import "./App.scss";
import Header from './component/header/Header';
import PageRoutes from './PageRoutes';

const App = () => {
    return (
    <BrowserRouter>
        <Header/>
        <PageRoutes/>
    </BrowserRouter>
    );
};           

export default App;