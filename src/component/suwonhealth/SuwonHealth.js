import Detail from "../Detail/Detail"

const SuwonHealth = () => {
    const data = {
        name: "수원시 보건소",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://github.com/kdn0325/StarbucksKR",
        screenshot: [
            require("../../Assets/img/suwonhealth/screenshot1.png"),
            require("../../Assets/img/suwonhealth/screenshot2.png"),
            require("../../Assets/img/suwonhealth/screenshot3.png"),
        ],
        logo: require("../../Assets/img/suwonhealth/suwonhealth_title.png"),
        skills: [
            {name: "html", url: require("../../Assets/img/skill/html.png")},
            {name: "css", url: require("../../Assets/img/skill/css.png")},
            {name: "js", url: require("../../Assets/img/skill/js.png")},
            {name: "jquery", url: require("../../Assets/img/skill/jquery.png")}
        ],
        description : [
            "관공서 웹사이트를 통해 웹 사이트를 이해하고 HTML,CSS,JQuery를 학습하고 Bxslider를 사용하여 이미지 슬라이드를 제작한 적응형 데스크톱 웹사이트입니다.", 
            "IE에 따른 웹 표준 Cross Browsing을 학습하였습니다",
        ],
        challenges : [
            "Web Standard",
            "CSS layout(postion)",
            "Adaptive Web",
            "Bx-Slider",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "IE",
        ],
        period: "2021.9 ~ 2021.10", 
    }
    
    const styles = {
        mainColor: "#77aed7",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }

    return <Detail data = {data} styles = {styles}/>
}

export default SuwonHealth;