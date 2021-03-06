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
            "개인 포트폴리오 React로 제작한 반응형 웹사이트이며 1depth 4개 메뉴, portfolio별 상세 페이지를 담았습니다", 
            "styled-component를 통한 컴포넌트별 스타일과 SCSS, Transition-Group을 활용하여 스타일의 재사용성을 학습하여 구현하였습니다.", 
            "React-router-dom v6를 적용하여 SPA(Single Page Application)를 학습하였습니다",
            "** View Codes를 클릭하시면 PROJECT 기여도와 SKILL의 기여도를 보실 수 있습니다. **",
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex,grid)",
            "Responsive Web",
            "Styled-Component",
            "SCSS",
            "Transition-Group",
            "React-Router-Dom v6",
            "W3C 웹 표준 검사 완료",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
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