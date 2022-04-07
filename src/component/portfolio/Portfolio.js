import Detail from "../Detail/Detail"

const Portfolio = ({skill}) => {
    const data = {
        name: "Portfolio",
        pageUrl: "https://portfolio-abel.netlify.app",
        github: "https://github.com/kdn0325/abel-portfolio",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161950835-9dc3aeb8-520b-4f48-b450-4f70e29a20f8.png",
            "https://user-images.githubusercontent.com/91298955/161950842-3da13993-bd74-48c1-8b4d-114af1954878.png",
            "https://user-images.githubusercontent.com/91298955/161950848-37836dbb-be5a-4fcd-9509-a3dc15b9c0b7.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161950831-e472801f-1df4-4945-9680-95abf87861b7.png",
        skills: [
            {name: "HTML5", url: require("../../Assets/img/skill/html.png")},
            {name: "SCSS", url: require("../../Assets/img/skill/sass.png")},
            {name: "Javascript", url: require("../../Assets/img/skill/js.png")},
            {name: "React", url: require("../../Assets/img/skill/react.png")}
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
        mainColor: "#1E313E",
        mainFontColor: "#27251F",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="React" || item.title==="SCSS" || item.title==="Styled-components")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default Portfolio;