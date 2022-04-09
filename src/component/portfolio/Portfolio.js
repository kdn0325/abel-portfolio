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
        description : [
            "React로 만든 포트폴리오 페이지입니다.", 
            "styled-component, SCSS, Transition을 활용하여 스타일링을 구현했습니다.", 
            "React-router-dom.", 
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex,grid)",
            "Responsive Web",
            "Styled-Component",
            "SCSS",
            "Transition-Group",
            "React-Router-Dom v6",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
        ],
        period: "2022.02 ~ 2022-03", 
    }
    
    const styles = {
        mainColor: "#1E313E",
        mainFontColor: "#808080",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="React" || item.title==="SCSS" || item.title==="Styled-components")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default Portfolio;