import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { Projects } from "../lib/interfaces/projects";

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
    query: gql`
      query AllProjects {
        projectCollection {
          items {
            sys {
              id
            }
            name
            slug
            text
          }
        }
      }
    `,
  });

  return addApolloState(apolloClient, {
    props: {
      projects,
    },
    revalidate: 1,
  });
};
