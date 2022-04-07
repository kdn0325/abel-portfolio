import Detail from "../Detail/Detail"

const Blog = ({skill}) => {
    const data = {
        name: "Abel의 블로그",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://kdn-blog.herokuapp.com/",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161950067-71c5cd95-46f8-425f-95e9-107b4847e0f9.png",
            "https://user-images.githubusercontent.com/91298955/161950062-17c04c2e-46f2-429f-a368-ff318a95e8f5.png",
            "https://user-images.githubusercontent.com/91298955/161950080-fc8e7df1-6276-4cbf-82a1-b8b50863abb7.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161950831-e472801f-1df4-4945-9680-95abf87861b7.png",
        description : [
            "MongoDB와 Node.js로 Javascript만을 사용하여 어떻게 서버를 만드는지 학습하면서 만든 블로그 웹사이트입니다.", 
            "MongoDB를 사용하여 데이터베이스를 관리하고 HTTP 에러와 서버를 만들때 오류와 같은 시행 착오를 겪으면서 웹이 어떻게 만들어지는지 학습했습니다",
            "useContext를 활용하여 REST로 로그인,회원가입,업데이트 과정을 학습했습니다", 
            "Bcrypt의 hash방식으로 패스워드를 사용하여 보안성에 대해 학습했습니다", 
        ],
        challenges : [
            "Node.js를 활용한 Server 생성",
            "Node.express",
            "REST의 기초(GET,POST,PUT,DELETE)",
            "Postman을 통한 API 활용",
            "React hook(useContext,useRef)",
            "MongoDB를 활용한 Database관리 , Schema",
            "Bcrypt",
            "Heroku Deploy",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari"
        ],
        period: "2021.02 ~ 2021-03", 
    }
    
    const styles = {
        mainColor: "#a143d2",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="React" || item.title==="Node.js" || item.title==="Express" || item.title==="MongoDB")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default Blog;