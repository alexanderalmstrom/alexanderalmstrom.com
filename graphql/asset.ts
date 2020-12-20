import { gql } from "@apollo/client";

export const Asset = gql`
  fragment Asset on Asset {
    sys {
      id
    }
    url
    title
    contentType
  }
`;
