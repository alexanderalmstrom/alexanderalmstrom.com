import { gql } from "@apollo/client";
import { ContentfulMedia } from "./media";
import { ContentfulText } from "./text";

export const ContentfulBlocks = gql`
  fragment ContentfulBlocks on Block {
    sys {
      id
    }
    componentsCollection(limit: 2) {
      items {
        ...ContentfulText
        ...ContentfulMedia
      }
    }
  }

  ${ContentfulText}
  ${ContentfulMedia}
`;
