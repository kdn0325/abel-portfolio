import Detail from "../Detail/Detail"

const KtAlpha = () => {
    const data = {
        name: "KT-Alpha",
        pageUrl: "https://kdn0325.github.io/KT-alpha/",
        github: "https://github.com/kdn0325/KT-alpha",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161949228-255993f9-d15b-4a64-8d14-901df8aee29e.png",
            "https://user-images.githubusercontent.com/91298955/161949266-f92dd97f-08f6-4ec8-bba3-5eb935d4a5aa.png",
            "https://user-images.githubusercontent.com/91298955/161949256-c64f26f0-a337-4720-ac54-a48b2f2ecedd.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161949222-c7a4f85d-9efe-4bc1-b2b2-b2153c829fde.png",
        skills: [
            {name: "html", url: require("../../Assets/img/skill/html.png")},
            {name: "css", url: require("../../Assets/img/skill/css.png")},
            {name: "js", url: require("../../Assets/img/skill/js.png")},
            {name: "jquery", url: require("../../Assets/img/skill/jquery.png")}
        ],
        description : [
            "웹 사이트 제작을 학습, HTML,CSS 학습을 적용하여 서브페이지까지 제작한 적응형 데스크톱 웹사이트입니다 ", 
            "IE/Chrome/Safari Cross Browsing을 학습하였습니다",
            "PhotoShop으로 레이아웃의 기초를 학습하고 Zeplin을 활용하여 웹 퍼블리싱의 기초를 학습했습니다.", 
        ],
        challenges : [
            "Web Standard",
            "CSS layout(position)",
            "Adaptive Web",
            "Zeplin를 사용하여 Photoshop으로 제작한 Layout Publishing",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "IE",
        ],
        period: "2021.08 ~ 2021.9", 
    }
    
    const styles = {
        mainColor: "#db2729",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }

    return <Detail data = {data} styles = {styles}/>

}

export default KtAlpha;