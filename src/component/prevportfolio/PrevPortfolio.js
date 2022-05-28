import Detail from "../Detail/Detail"

const PrevPortfolio = ({skill}) => {
    const data = {
        name: "Portfolio",
        pageUrl: "https://kdn0325.github.io/prev-portfolio/",
        github: "https://github.com/kdn0325/prev-portfolio",
        screenshot: [
            "https://user-images.githubusercontent.com/91298955/161951416-cd10f2fc-6eeb-4174-8a55-2bddf6fbbc55.png",
            "https://user-images.githubusercontent.com/91298955/161951412-60fea31e-fb5a-44f7-b0a2-94b9f4501c8e.png",
            "https://user-images.githubusercontent.com/91298955/161951425-31c2b8f8-8896-4245-80cd-e6a48905bd46.png",
        ],
        logo: "https://user-images.githubusercontent.com/91298955/161950831-e472801f-1df4-4945-9680-95abf87861b7.png",
        description : [
            "포트폴리오를 제작하면서 절차지향/객체지향을 이해하고 활용하며 함수, 메소드, 클래스, 프로토타입 등을 이해하고 UI 제작에 활용하였습니다", 
            "클래스형으로 함수를 만들어서 메뉴창을 구현하였고 햄버거 버튼과 애니메이션을 활용하였습니다", 
            "지금의 모던한 웹 개발 환경에서 표준 자바스크립트를 이해하고 DOM 조작을 통해 최신의 ECMAScript의 특징을 익혔습니다", 
            "** View Codes를 클릭하시면 PROJECT 기여도와 SKILL의 기여도를 보실 수 있습니다. **",
        ],
        challenges : [
            "Web Standard",
            "CSS layout(flex)",
            "Responsive Web",
            "Pigma를 통한 Responsive에 따른 웹 구현",
            "ECMAScript",
            "PhotoShop",
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
        mainColor: "#e1c45e",
        mainFontColor: "#000",
        subFontColor: "#fff",
    }
    const skills = skill.filter(item=>item.title==="HTML5" || item.title==="CSS3"  || item.title==="Javascript")

    return <Detail data = {data} styles = {styles} skills={skills}/>
}

export default PrevPortfolio;