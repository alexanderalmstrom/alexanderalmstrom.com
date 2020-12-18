import { gql } from "@apollo/client";

export const TEXT = gql`
  fragment Text on Text {
    sys {
      id
    }
    text
    size
  }
`;
