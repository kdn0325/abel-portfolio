import Detail from "../Detail/Detail"

const Starbucks = ({skill}) => {
    const data = {
        name: "Starbucks Korea",
        pageUrl: "https://kdn0325.github.io/StarbucksKR/",
        github: "https://github.com/kdn0325/StarbucksKR",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161951698-20ada237-70d6-4d49-87f8-937343ee3547.png",
            "https://user-images.githubusercontent.com/91298955/161951705-b5d18f81-5169-4c78-b759-19ccfe761d90.png",
            "https://user-images.githubusercontent.com/91298955/161951710-fce14009-eccc-4916-8e92-11da0a8aa2e4.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161951907-454b0677-672b-41c1-a9ec-5a9fedefbb87.png",
        description : [
            "인터렉티브한 웹사이트를 표현할 수 있는 패럴랙스 스크롤링과 이미지 슬라이드 구현을 위한 JQuery 애니메이션을 학습하며 제작한 반응형 스타벅스 코리아 클론 데스크톱 웹사이트입니다.", 
            "Safari , Chrome과 같은 다른 브라우저들과의 Cross Browsing을 학습하였습니다",
            "웹사이트 기획을 하면서 웹 UI 구조를 이해했고, 툴은 PhotoShop,Pigma를 활용하였습니다.",
            "** View Codes를 클릭하시면 기획서 ppt를 보실 수 있습니다. **",
            "** View Codes를 클릭하시면 PROJECT 기여도와 SKILL의 기여도를 보실 수 있습니다. **",
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex)",
            "Responsive Web",
            "정보구조도,와이어프레임 제작, 제작기획 과정 ppt 작성",
            "Pigma를 통한 Responsive에 따른 웹 구현",
            "PhotoShop",
            "Pigma",
            "W3C 웹 표준 검사 완료",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari"
        ],
        period: "2021.09 ~ 2021.10", 
    }
    
    const styles = {
        mainColor: "#00704A",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript" || item.title==="Jquery")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default Starbucks;