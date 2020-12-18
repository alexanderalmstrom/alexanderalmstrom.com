import { gql } from "@apollo/client";

export const ASSET = gql`
  fragment Asset on Asset {
    sys {
      id
    }
    url
    title
  }
`;
