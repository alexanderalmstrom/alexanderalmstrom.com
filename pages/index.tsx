import styles from "@styles/pages/Home.module.scss";
import { title, description } from "@config/seo.json";
import Layout from "@components/Layout";
import Header from "@components/Header";

interface Props {}

const Home = ({}: Props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </Layout>
  );
};

export default Home;
