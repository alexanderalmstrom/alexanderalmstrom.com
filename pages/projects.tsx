import styles from "@styles/pages/Projects.module.scss";
import { GetStaticProps } from "next";
import Link from "next/link";
import { client } from "@lib/client";
import { GetProjectsQuery, ProjectCollection } from "@generated/types";
import { GET_PROJECTS } from "@graphql/projects";
import Layout from "@components/Layout";

interface Props {
  projectCollection: ProjectCollection;
}

export default function ProjectsPage({ projectCollection }: Props) {
  return (
    <Layout title="Projects">
      <article className={styles.root}>
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
        </header>
        <div className={styles.projects}>
          {projectCollection.items.map((project) => (
            <Link key={project.sys.id} href={`/project/${project.slug}`}>
              <a className={styles.project}>
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
}

export const getStaticProps: GetStaticProps = async () => {
  const { projectCollection } = await client.request<GetProjectsQuery>(
    GET_PROJECTS
  );

  return {
    props: {
      projectCollection,
    },
    revalidate: 1,
  };
};
