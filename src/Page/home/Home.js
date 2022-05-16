import styles from "./home.module.scss";


const Home = () => {
    return (
        <main>
            <ul id="skip">
                <li><a href="/">Home</a></li>
                <li><a href="/intro">Intro</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <section className={styles.home}>
                <h1 className={styles.home_greeting}>안녕하세요 <strong>Front-end-Developer Abel</strong>의 포트폴리오입니다</h1>
            </section>
        </main>
    );
};

export default Home;