import projectStyles from "@styles/pages/Projects.module.scss";
import homeStyles from "@styles/pages/Home.module.scss";
import { GetStaticProps } from "next";
import Link from "next/link";
import { client } from "@lib/client";
import { GET_PROJECTS } from "@graphql/projects";
import { GetProjectsQuery, ProjectCollection } from "@generated/types";
import Layout from "@components/Layout";

interface Props {
  projectCollection: ProjectCollection;
}

export default function HomePage({ projectCollection }: Props) {
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
          {projectCollection.items.map((project) => (
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
      </div>
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
