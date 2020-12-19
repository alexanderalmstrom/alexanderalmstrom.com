import { GetStaticProps } from "next";
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
      {projects.projectCollection.items.map((project) => (
        <div key={project.sys.id}>
          {project.image && (
            <img src={project.image.url} alt={project.image.title} />
          )}
        </div>
      ))}
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
