import { gql } from "graphql-request";
import { Blocks } from "./blocks";

export const Project = gql`
  fragment Project on Project {
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
    blocksCollection(limit: 20) {
      items {
        ...Blocks
      }
    }
  }

  ${Blocks}
`;
