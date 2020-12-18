import { gql } from "@apollo/client";

export const ContentfulAsset = gql`
  fragment ContentfulAsset on Asset {
    sys {
      id
    }
    url
    title
    contentType
  }
`;
