import Detail from "../Detail/Detail"

const Watching = ({skill}) => {
    const data = {
        name: "Watching",
        pageUrl: "https://abelwatching.netlify.app/",
        github: "https://github.com/kdn0325/watching-app",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161952365-5ed9f953-dea1-433e-8a65-ef3ac3024c1e.png",
            "https://user-images.githubusercontent.com/91298955/161952369-fe5a3d45-34e8-453b-a247-5a35cc4cd62a.png",
            "https://user-images.githubusercontent.com/91298955/161952385-984eee45-1947-4053-9f46-3e90721033b3.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161952534-73914ea9-410c-41e8-b9fd-83af47ef8de3.png",
        skills: [
            {name: "HTML5", url: require("../../Assets/img/skill/html.png")},
            {name: "SCSS", url: require("../../Assets/img/skill/sass.png")},
            {name: "React", url: require("../../Assets/img/skill/react.png")},
        ],
        description : [
            "React를 사용한 첫 프로젝트이며 , TMDB API를 활용한 영화 정보 서비스입니다",
            "Axios,Router,SPA(Single Page Application),Component 분리 등 React를 사용하는 이유(최소 렌더링)를 학습했습니다.", 
            "SCSS로 스타일을 전역적으로 사용하여 컴포넌트 별 공통 스타일을 주어 재사용성의 중요성을 익혔습니다", 
            "React Router Dom v5버전과 업데이트된 v6 차이를 학습하였습니다", 
        ],
        challenges : [
            "The Movie DataBase API",
            "Flex in SCSS",
            "Swiper",
            "Axios",
            "Responsive Web",
            "React Hook",
            "React Router Dom v6",
            "Youtube Api & iframe",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari"
        ],
        period: "2022.02 ~ 2021-03", 
    }
    
    const styles = {
        mainColor: "#f79f24",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="React" || item.title==="SCSS")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default Watching;