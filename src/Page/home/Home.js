import styles from "./home.module.scss";


const Home = () => {
    return (
        <div>
            <section className={styles.home}>
                <h1 className={styles.home_greeting}>안녕하세요 <strong>Front-end-Developer Abel</strong>의 포트폴리오입니다</h1>
            </section>
        </div>
    );
};

export default Home;