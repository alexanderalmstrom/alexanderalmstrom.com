import { gql } from "@apollo/client";
import { Asset } from "./asset";
import { Project } from "./project";

export const GET_PROJECTS = gql`
  query GetProjects {
    projectCollection {
      items {
        ...Project
      }
    }
  }

  ${Asset}
  ${Project}
`;

export const GET_PROJECT = gql`
  query GetProject($slug: String!) {
    projectCollection(where: { slug: $slug }) {
      items {
        ...Project
      }
    }
  }

  ${Asset}
  ${Project}
`;
