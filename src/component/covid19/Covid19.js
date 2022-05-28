import Detail from "../Detail/Detail"

const Covid19 = ({skill}) => {
    const data = {
        name: "국내 코로나 현황",
        pageUrl: "https://kdn0325.github.io/covid19-app/index.html",
        github: "https://github.com/kdn0325/covid19-app",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161950401-93b3f7a8-cdb5-40db-ab45-a54689ebc213.png",
            "https://user-images.githubusercontent.com/91298955/161950418-750796a1-a94d-412e-8636-2c9d87a1dfb5.png",
            "https://user-images.githubusercontent.com/91298955/161950408-b3700151-7003-439b-8585-229d509b79be.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161950398-cdd64398-5f2c-49f9-958a-4e1cfee28418.png",
        description : [
            "국내 코로나 현황 API를 이용하여 제작한 토이 프로젝트 입니다.", 
            "Chart.js를 학습하며 Open API를 활용하여 제작했습니다.", 
            "** View Codes를 클릭하시면 PROJECT 기여도와 SKILL의 기여도를 보실 수 있습니다. **",
        ],
        challenges : [
            "React",
            "Chart JS",
            "Axios",
            "W3C 웹 표준 검사 완료",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "Edge",
        ],
        period: "2021.09 ~ 2021-10", 
    }
    
    const styles = {
        mainColor: "#3b5999",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="React")

    return <Detail data = {data} styles = {styles} skills={skills}/>
    
}

export default Covid19;