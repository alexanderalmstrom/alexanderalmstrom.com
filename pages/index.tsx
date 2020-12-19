import styles from "@styles/pages/Home.module.scss";
import { title, description } from "@config/seo.json";
import Layout from "@components/Layout";

interface Props {}

const Home = ({}: Props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <h1 className={styles.title}>{description}</h1>
      </div>
    </Layout>
  );
};

export default Home;
