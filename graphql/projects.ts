import { gql } from "@apollo/client";

export const ALL_PROJECTS = gql`
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
`;
