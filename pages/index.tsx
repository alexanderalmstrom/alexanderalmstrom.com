import styles from "@styles/pages/Home.module.scss";
import { title, description } from "@config/seo.json";
import Layout from "@components/Layout";
import Header from "@components/Header";
import Logo from "../assets/logo.svg";

interface Props {}

const Home = ({}: Props) => {
  return (
    <Layout>
      <Header />
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </Layout>
  );
};

export default Home;
