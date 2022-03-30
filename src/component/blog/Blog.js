import Detail from "../Detail/Detail"

const Blog = () => {
    const data = {
        name: "Abel의 블로그",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://kdn-blog.herokuapp.com/",
        screenshot: [
            require("../../Assets/img/blog/screenshot1.png"),
            require("../../Assets/img/blog/screenshot2.png"),
            require("../../Assets/img/blog/screenshot3.png"),
        ],
        logo: require("../../Assets/img/blog/abel_title.png"),
        skills: [
            {name: "react", url: require("../../Assets/img/skill/react.png")},
            {name: "node.js", url: require("../../Assets/img/skill/nodejs.png")},
            {name: "node-express", url: require("../../Assets/img/skill/node_express.png")},
            {name: "mongoDB", url: require("../../Assets/img/skill/mongoDB.png")}
        ],
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

    return <Detail data = {data} styles = {styles}/>
}

export default Blog;