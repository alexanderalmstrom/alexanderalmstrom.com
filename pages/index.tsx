import { GetStaticProps } from "next";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { Projects } from "../interfaces/projects";
import { GET_PROJECTS } from "../graphql/projects";

interface Props {
  projects: Projects;
}

const Home = ({ projects }: Props) => {
  return (
    <div>
      {projects.projectCollection.items.map((project) => (
        <div key={project.sys.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data: projects } = await apolloClient.query({
    query: GET_PROJECTS,
  });

  return addApolloState(apolloClient, {
    props: {
      projects,
    },
    revalidate: 1,
  });
};
