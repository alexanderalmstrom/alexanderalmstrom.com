import { gql } from "@apollo/client";
import { ASSET } from "./asset";

export const MEDIA = gql`
  fragment Media on Media {
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
          ...Asset
        }
      }
    }
  }

  ${ASSET}
`;
