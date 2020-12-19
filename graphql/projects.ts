import { gql } from "@apollo/client";
import { ContentfulAsset } from "./asset";

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
        image {
          ...ContentfulAsset
        }
      }
    }
  }

  ${ContentfulAsset}
`;
