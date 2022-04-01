import Detail from "../Detail/Detail"

const Starbucks = () => {
    const data = {
        name: "Starbucks Korea",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://github.com/kdn0325/StarbucksKR",
        screenshot: [
            require("../../Assets/img/starbucks/screenshot1.png"),
            require("../../Assets/img/starbucks/screenshot2.png"),
            require("../../Assets/img/starbucks/screenshot3.png"),
        ],
        logo: require("../../Assets/img/starbucks/starbucks_title.png"),
        skills: [
            {name: "html", url: require("../../Assets/img/skill/html.png")},
            {name: "css", url: require("../../Assets/img/skill/css.png")},
            {name: "js", url: require("../../Assets/img/skill/js.png")},
            {name: "jquery", url: require("../../Assets/img/skill/jquery.png")}
        ],
        description : [
            "인터렉티브한 웹사이트를 표현할 수 있는 패럴랙스 스크롤링과 이미지 슬라이드 구현을 위한 JQuery 애니메이션을 학습하며 제작한 반응형 스타벅스 코리아 클론 데스크톱 웹사이트입니다.", 
            "Safari , Chrome과 같은 다른 브라우저들과의 Cross Browsing을 학습하였습니다",
            "웹사이트 제작을 통한 UI에 대해 조금 더 알게되었고 웹사이트 기획을 하면서 PhotoShop,Pigma를 활용하였습니다.", 
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex)",
            "Responsive Web",
            "Pigma를 통한 Responsive에 따른 웹 구현",
            "PhotoShop",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari"
        ],
        period: "2021.09 ~ 2021.10", 
    }
    
    const styles = {
        mainColor: "#00704A",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }

    return <Detail data = {data} styles = {styles}/>
}

export default Starbucks;