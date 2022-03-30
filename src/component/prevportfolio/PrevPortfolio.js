import Detail from "../Detail/Detail"

const PrevPortfolio = () => {
    const data = {
        name: "Portfolio",
        pageUrl: "https://kdn0325.github.io/portfolio/",
        github: "https://github.com/kdn0325/portfolio",
        screenshot: [
            require("../../Assets/img/prevportfolio/screenshot1.png"),
            require("../../Assets/img/prevportfolio/screenshot2.png"),
            require("../../Assets/img/prevportfolio/screenshot3.png"),
        ],
        logo: require("../../Assets/img/prevportfolio/abel_title.png"),
        skills: [
            {name: "html", url: require("../../Assets/img/skill/html.png")},
            {name: "css", url: require("../../Assets/img/skill/css.png")},
            {name: "js", url: require("../../Assets/img/skill/js.png")},
        ],
        description : [
            "포트폴리오를 제작하면서 절차지향/객체지향을 이해하고 활용하며 함수, 메소드, 클래스, 프로토타입 등을 이해하고 UI 제작에 활용하였습니다", 
            "클래스형으로 함수를 만들어서 메뉴창을 구현하였고 햄버거 버튼과 애니메이션을 활용하였습니다", 
            "지금의 모던한 웹 개발 환경에서 표준 자바스크립트를 이해하고 DOM 조작을 통해 최신의 ECMAScript의 특징을 익혔습니다", 
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex)",
            "Responsive Web",
            "Pigma를 통한 Responsive에 따른 웹 구현",
            "ECMAScript",
            "PhotoShop",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
        ],
        period: "2021.09 ~ 2021-10", 
    }
    
    const styles = {
        mainColor: "#e1c45e",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }

    return <Detail data = {data} styles = {styles}/>
}

export default PrevPortfolio;