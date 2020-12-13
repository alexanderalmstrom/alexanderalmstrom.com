import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
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
