import styled from "styled-components";
import { Link} from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
    
const Container = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 30, 30, .98);
    display: flex;
    justify-content: space-between;
    padding: 7rem 3rem 4rem;
    
`;

const Left = styled.div`
    width: 25%;
    height: 100%;
    padding: .5rem 1.5rem;
    background-color: #292828;
    border-radius: 2rem;
    display: grid;
    grid-template-rows: 7fr 1fr 1fr .3fr;
    position: relative;
    animation: initailAppear1 1.5s ease-in-out;
    @keyframes initailAppear1{
        from{opacity: 0; transform: translateX(-6rem)}
        to{opacity: 1; ; transform: translateX(0)}
    }
    @media screen and (min-width:23rem) and (max-width:37rem){
        width:100%;
    }
    .goBack{
        position: absolute;
        top: 50%;
        right: 105%;
        transform: translateY(-50%);
        height: 10%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff;
        .iconArrowLeft{
            font-size: 3.5rem;
            font-weight: 100;
            margin-right: .5rem;
            animation: repeatMoveLeft 2s infinite linear;
            @keyframes repeatMoveLeft{
                0%{opacity: 0;}
                30%{opacity: .4;}
                50%{opacity: .5; transform: translateX(-10%)}
                70%{opacity: .4;}
                100%{opacity: 0; transform: translateX(-30%)}
            }
        }
    }
`;

const Screenshot = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width:70%;
        position: absolute;
        border-radius: .5rem;
        box-shadow: 0 0 .5rem #000;
        &.screen1{z-index: 3; top: 5%; left: 55%; transform: translateX(-50%);}
        &.screen2{z-index: 2; top: 35%; left: 50%; transform: translateX(-50%);}
        &.screen3{z-index: 1; top: 65%; left: 55%; transform: translateX(-50%);}
        
        @media screen and (min-width:23rem) and (max-width:37rem){
            width:80%;
        }
        @media screen and (min-width:38rem) and (max-width:50rem){
            width:100%;
        }
    }
`;

const Move = styled.a`
    justify-self: center;
    display: flex;
    align-items: center;
    width: 90%;
    height: 70%;
    padding-left: 1.5rem;
    background: #3c4149;
    border-radius: 2rem;
    font-size: .85rem;
    color: #ccc;
    &:hover{
        .hoverAni{
            animation: hoverAni .4s infinite ease-in-out;
            @keyframes hoverAni{
                0%{transform: translateX(0)}
                50%{transform: translateX(.1rem)}
                100%{transform: translateX(0)}
            }
        }
    }
    .rightArrow{
        display: block;
        width: 15%;
        font-size: 1.4rem;
        margin-right: .5rem;
    }
    img{
        display: block;
        width: 15%;
        margin-right: .5rem;
    }
    
`;

const Right = styled.div`
    width: 70%;
    height: 100%;
    padding: 3rem 3rem;
    border-radius: 2rem;
    display: grid;
    letter-spacing: .07rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2.5fr 2fr 1fr;
    animation: initailAppear2 1.5s ease-in-out;
    @keyframes initailAppear2{
        from{opacity: 0; transform: translateX(6rem)}
        to{opacity: 1; ; transform: translateX(0)}
    }
    @media screen and (min-width:23rem) and (max-width:37rem){
        display:none;
    }
`;

const Logo = styled.img`
    align-self: center;
    padding-left: 2rem;
    display: flex;
    width:50%;
    @media screen and (min-width:38rem) and (max-width:50rem){
        width:70%;
    }
`;

const Skills = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SkillList = styled.ul`
    display: flex;
`;

const Skill = styled.li`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.5rem;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .7;
`;

const Desc = styled.ul`
    grid-row: 2/3;
    grid-column: 1/3;
    align-self: center;
    width: 80%;
    margin: 0 2rem;
    padding: 1rem 1rem;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    li{
        font-size: .8rem;
        padding: .5rem 0;
    }
`;

const Challenges = styled.div`
    grid-column: 2/3;
    grid-row: 3/5;
    padding: 0 2rem;
    font-size: .9rem;
    h5{
        font-size: 1rem;
        margin-bottom: 1.2rem;
        font-weight: 500;
        @media screen and (min-width:23rem) and (max-width:37rem){
            font-size:1.5rem;
        }
    }
`;


const ChallengeList = styled.ul`
    li{
        margin-bottom: .8rem;
        display: flex;
        p{
            margin-left: .5rem;
        }
        .cListCheck{
            font-size: 1rem;
            transform: translateY(7%);
        }
    }
`;

const Period = styled.p`
    grid-column: 1/2;   
    grid-row: 4/5;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 500;
`;

const Browsers = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;
    padding: 0 2rem;
    font-size: .9rem;
    h5{
        margin-bottom: 1.2rem;
        font-size: 1rem;
        font-weight: 500;
    }
    
`;
const BrowserList = styled.ul`
    @media screen and (max-width:24rem){
        display:flex;
    }
    li{
        margin-bottom: .8rem;
        display: flex;
        p{
            margin-left: .5rem;
        }
        .cListCheck{
            font-size: 1.1rem;
            transform: translateY(7%);
        }
    }
`;

const Detail = ({data,styles}) => {
    return(
    <Container>
            <Left style = {{boxShadow: `0 0 .5rem ${styles.mainColor}`}}>
                <Link className="goBack" to="/project"><DoubleArrowIcon style={{transform:"scaleX(-1)"}}/></Link>
                <Screenshot>
                    <img src={data.screenshot[0]} alt="screenshot1" className="screen1" />
                    <img src={data.screenshot[1]} alt="screenshot2" className="screen2" />
                    <img src={data.screenshot[2]} alt="screenshot3" className="screen3" />
                </Screenshot>
                <Move href={data.pageUrl} rel="noreferrer" target="_blank"><span className="hoverAni">Move to {data.name}</span></Move>
                <Move href={data.github} rel="noreferrer" target="_blank" className="github"><img src={require(`../../Assets/img/skill/git.png`)} alt="github" className="hoverAni" /> <span className="hoverAni">View Codes</span></Move>
            </Left>
            <Right style = {{backgroundColor: styles.mainColor, color: styles.mainFontColor, boxShadow: `0 0 .5rem ${styles.mainColor}`}}>
                <Logo src={data.logo} />
                <Skills>
                    <SkillList>
                        {data.skills.map(skill => <Skill bgImg={skill.url}></Skill>)}
                    </SkillList>
                </Skills>
                <Desc>
                    {data.description.map(row => <li style = {{color: styles.subFontColor}}>{row}</li>)}
                </Desc>
                <Challenges>
                    <h5>Challenges</h5>
                    <ChallengeList>
                        {data.challenges.map(challenge => 
                            <li style = {{color: styles.subFontColor}}>
                                <p>{challenge}</p>
                            </li>
                        )}
                    </ChallengeList>
                </Challenges>
                <Period>Period / {data.period}</Period>
                <Browsers>
                    <h5>Browers</h5>
                    <BrowserList>
                        {data.browsers.map(browser => 
                            <li style = {{color: styles.subFontColor}}>
                                <p>{browser}</p>
                            </li>
                        )}
                    </BrowserList>
                </Browsers>
            </Right>
        </Container>
    );
}

export default Detail;