import styles from "@styles/pages/Project.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { Project } from "@generated/types";
import { Projects } from "@interfaces/projects";
import { addApolloState, initializeApollo } from "@lib/apolloClient";
import { GET_PROJECTS, GET_PROJECT } from "@graphql/projects";
import Layout from "@components/Layout";
import Block from "@components/Block";

interface Props {
  project: Project;
}

const ProjectBySlug = ({ project }: Props) => {
  return (
    <Layout
      title={project.title || project.name}
      description={project.description}
    >
      <article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
        </header>
        {project.text && (
          <ReactMarkdown className={styles.text}>{project.text}</ReactMarkdown>
        )}
        {project.blocksCollection.items.map((block) => (
          <Block key={block.sys.id} block={block} />
        ))}
      </article>
    </Layout>
  );
};

export default ProjectBySlug;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<Projects>({
    query: GET_PROJECTS,
  });

  const paths = data.projectCollection.items.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<Projects>({
    query: GET_PROJECT,
    variables: {
      slug: params.slug,
    },
  });

  const project = data.projectCollection.items[0];

  return addApolloState(apolloClient, {
    props: {
      project,
    },
    revalidate: true,
  });
};
