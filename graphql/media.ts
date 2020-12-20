import { gql } from "@apollo/client";
import { Asset } from "./asset";

export const Media = gql`
  fragment Media on Media {
    sys {
      id
    }
    size
    mediaCollection(limit: 2) {
      items {
        ...Asset
      }
    }
  }

  ${Asset}
`;
