import { gql } from "graphql-request";
import { Project } from "./project";

export const GET_PROJECTS = gql`
  query GetProjects {
    projectCollection(limit: 50) {
      items {
        sys {
          id
        }
        name
        slug
        title
        description
        text
        image {
          ... on Asset {
            sys {
              id
            }
            url
            title
            contentType
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($slug: String!) {
    projectCollection(limit: 1, where: { slug: $slug }) {
      items {
        ...Project
      }
    }
  }

  ${Project}
`;
