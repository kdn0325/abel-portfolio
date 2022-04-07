import Detail from "../Detail/Detail"

const SuwonHealth = ({skill}) => {
    const data = {
        name: "수원시 보건소",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://github.com/kdn0325/StarbucksKR",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161952039-fd7d008c-88af-4b40-bb07-318c547e7f76.png",
            "https://user-images.githubusercontent.com/91298955/161952049-a4d66967-b2a1-4408-bcbd-c52177bd626a.png",
            "https://user-images.githubusercontent.com/91298955/161952064-dfb30b0d-c297-48d2-8360-abdbf7788787.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161952031-c8102995-6a96-4faf-a12f-a308436bbc6b.png",
        skills: [
            {name: "HTML5", url: require("../../Assets/img/skill/html.png")},
            {name: "CSS", url: require("../../Assets/img/skill/css.png")},
            {name: "Javascript", url: require("../../Assets/img/skill/js.png")},
            {name: "Jquery", url: require("../../Assets/img/skill/jquery.png")}
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
    const skills = skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript" || item.title==="Jquery")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default SuwonHealth;