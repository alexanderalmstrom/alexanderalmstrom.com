import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "@styles/pages/Projects.module.scss";
import { Projects } from "@interfaces/projects";
import { addApolloState, initializeApollo } from "@lib/apolloClient";
import { GET_PROJECTS } from "@graphql/projects";
import Layout from "@components/Layout";

interface Props {
  projects: Projects;
}

const PageProjects = ({ projects }: Props) => {
  return (
    <Layout title="Projects">
      <article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
        </header>
        <div className={styles.projects}>
          {projects.projectCollection.items.map((project) => (
            <Link key={project.sys.id} href={`/project/${project.slug}`}>
              <a>
                {project.image && (
                  <img
                    src={`${project.image.url}?w=1280&q=75&fm=jpg&fl=progressive`}
                    alt={project.image.title}
                    width={project.image.width}
                    height={project.image.height}
                  />
                )}
              </a>
            </Link>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default PageProjects;

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
