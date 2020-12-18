import { gql } from "@apollo/client";
import { ContentfulAsset } from "./asset";

export const ContentfulMedia = gql`
  fragment ContentfulMedia on Media {
    sys {
      id
    }
    size
    mediaCollection(limit: 2) {
      items {
        sys {
          id
        }
        url
        ... on Asset {
          ...ContentfulAsset
        }
      }
    }
  }

  ${ContentfulAsset}
`;
