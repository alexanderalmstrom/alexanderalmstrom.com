import { GetStaticProps } from "next";
import Link from "next/link";
import homeStyles from "@styles/pages/Home.module.scss";
import projectStyles from "@styles/pages/Projects.module.scss";
import { description } from "@config/seo.json";
import { Projects } from "@interfaces/projects";
import { addApolloState, initializeApollo } from "@lib/apolloClient";
import { GET_PROJECTS } from "@graphql/projects";
import Layout from "@components/Layout";

interface Props {
  projects: Projects;
}

const Home = ({ projects }: Props) => {
  return (
    <Layout>
      <div className={homeStyles.root}>
        <header className={homeStyles.header}>
          <h1 className={homeStyles.title}>
            Senior Frontend Developer &amp; Art Director based in Stockholm,
            Sweden.
          </h1>
        </header>
        <div className={projectStyles.projects}>
          {projects.projectCollection.items.map((project) => (
            <Link key={project.sys.id} href={`/project/${project.slug}`}>
              <a>
                {project.image && (
                  <img src={project.image.url} alt={project.image.title} />
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data: projects } = await apolloClient.query<Projects>({
    query: GET_PROJECTS,
  });

  return addApolloState(apolloClient, {
    props: {
      projects,
    },
    revalidate: true,
  });
};
