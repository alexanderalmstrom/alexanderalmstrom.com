import { gql } from "@apollo/client";
import { BLOCKS } from "./blocks";

export const PAGE = gql`
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
      url
      title
    }
    blocksCollection(limit: 10) {
      items {
        sys {
          id
        }
        ...Block
      }
    }
  }

  ${BLOCKS}
`;
