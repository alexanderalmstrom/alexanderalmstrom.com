import styles from "@styles/pages/Project.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "graphql-request";
import ReactMarkdown from "react-markdown";
import { GetProjectQuery, GetProjectsQuery, Project } from "@generated/types";
import { GET_PROJECT } from "@graphql/projects";
import Layout from "@components/Layout";
import Block from "@components/Block";
import { client } from "@lib/client";

interface Props {
  project: Project;
}

export default function ProjectPage({ project }: Props) {
  return (
    <Layout
      title={project.title || project.name}
      description={project.description}
    >
      <article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title} data-text={project.name}>
            {project.name}
          </h1>
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projectCollection } = await client.request<GetProjectQuery>(
    gql`
      query Projects {
        projectCollection(limit: 100) {
          items {
            slug
          }
        }
      }
    `
  );

  const paths = projectCollection.items.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projectCollection } = await client.request<GetProjectsQuery>(
    GET_PROJECT,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      project: projectCollection.items[0],
    },
    revalidate: 1,
  };
};
