import { gql } from "graphql-request";
import { Blocks } from "./blocks";

export const Page = gql`
  fragment Page on Page {
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
