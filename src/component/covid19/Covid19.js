import Detail from "../Detail/Detail"

const Covid19 = () => {
    const data = {
        name: "국내 코로나 현황",
        pageUrl: "https://github.com/kdn0325/covid19-app",
        github: "https://kdn0325.github.io/covid19-app/",
        screenshot: [
            require("../../Assets/img/covid19/screenshot1.png"),
            require("../../Assets/img/covid19/screenshot2.png"),
            require("../../Assets/img/covid19/screenshot3.png"),
        ],
        logo:require("../../Assets/img/covid19/covid19_title.png"),
        skills: [
            {name: "html", url: require("../../Assets/img/skill/react.png")},
        ],
        description : [
            "인터렉티브한 웹사이트를 표현할 수 있는 패럴랙스 스크롤링과 이미지 슬라이드 구현을 위한 JQuery 애니메이션을 학습하며 제작한 반응형 스타벅스 코리아 클론 데스크톱 웹사이트입니다.", 
            "Safari , Chrome과 같은 다른 브라우저들과의 Cross Browsing을 학습하였습니다",
            "웹사이트 제작을 통한 UI에 대해 조금 더 알게되었고 웹사이트 기획을 하면서 PhotoShop,Pigma를 활용하였습니다.", 
        ],
        challenges : [
            "React",
            "Chart JS",
            "Axios",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari"
        ],
        period: "2021.09 ~ 2021-10", 
    }
    
    const styles = {
        mainColor: "#3b5999",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }

    return <Detail data = {data} styles = {styles}/>
}

export default Covid19;