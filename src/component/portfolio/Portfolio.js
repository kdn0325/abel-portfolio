import Detail from "../Detail/Detail"

const Portfolio = () => {
    const data = {
        name: "Portfolio",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://github.com/kdn0325/StarbucksKR",
        screenshot: [
            require("../../Assets/img/portfolio/screenshot1.png"),
            require("../../Assets/img/portfolio/screenshot2.png"),
            require("../../Assets/img/portfolio/screenshot2.png"),
        ],
        logo: require("../../Assets/img/portfolio/abel_title.png"),
        skills: [
            {name: "html", url: require("../../Assets/img/skill/html.png")},
            {name: "scss", url: require("../../Assets/img/skill/sass.png")},
            {name: "js", url: require("../../Assets/img/skill/js.png")},
            {name: "react", url: require("../../Assets/img/skill/react.png")}
        ],
        description : [
            "인터렉티브한 웹사이트를 표현할 수 있는 패럴랙스 스크롤링과 이미지 슬라이드 구현을 위한 JQuery 애니메이션을 학습하며 제작한 반응형 스타벅스 코리아 클론 데스크톱 웹사이트입니다.", 
            "Safari , Chrome과 같은 다른 브라우저들과의 Cross Browsing을 학습하였습니다",
            "웹사이트 제작을 통한 UI에 대해 조금 더 알게되었고 웹사이트 기획을 하면서 PhotoShop,Pigma를 활용하였습니다.", 
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex,grid)",
            "Responsive Web",
            "Styled-Component",
            "SCSS",
            "Transition-Group",
            "React-Router-Dom",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari"
        ],
        period: "2022.02 ~ 2022-03", 
    }
    
    const styles = {
        mainColor: "#00704A",
        mainFontColor: "#27251F",
        subFontColor: "#fff",
    }

    return <Detail data = {data} styles = {styles}/>
}

export default Portfolio;