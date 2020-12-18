import { gql } from "@apollo/client";
import { ContentfulBlocks } from "./blocks";

export const ContentfulPage = gql`
  fragment ContentfulPage on Page {
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
        ...ContentfulBlocks
      }
    }
  }

  ${ContentfulBlocks}
`;
