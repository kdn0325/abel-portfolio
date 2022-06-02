import styles from "./home.module.scss";


const Home = () => {
    return (
        <div>
            <section className={styles.home}>
                <article>
                    <h1 className={styles.home_greeting}>안녕하세요. 배움을 통해 더 성장하고 싶은 <strong>UI 개발</strong>&nbsp;및&nbsp;<strong>Front-end 개발자&nbsp;</strong>Abel의 포트폴리오입니다.</h1>
                </article>
            </section>
        </div>
    );
};

export default Home;