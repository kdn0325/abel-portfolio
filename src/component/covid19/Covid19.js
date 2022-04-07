import Detail from "../Detail/Detail"

const Covid19 = ({skill}) => {
    const data = {
        name: "국내 코로나 현황",
        pageUrl: "https://github.com/kdn0325/covid19-app",
        github: "https://kdn0325.github.io/covid19-app/",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161950401-93b3f7a8-cdb5-40db-ab45-a54689ebc213.png",
            "https://user-images.githubusercontent.com/91298955/161950418-750796a1-a94d-412e-8636-2c9d87a1dfb5.png",
            "https://user-images.githubusercontent.com/91298955/161950408-b3700151-7003-439b-8585-229d509b79be.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161950398-cdd64398-5f2c-49f9-958a-4e1cfee28418.png",
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
    const skills = skill.filter(item=>item.title==="React")

    return <Detail data = {data} styles = {styles} skills={skills}/>
    
}

export default Covid19;