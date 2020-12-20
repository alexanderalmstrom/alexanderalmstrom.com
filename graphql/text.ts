import { gql } from "@apollo/client";

export const Text = gql`
  fragment Text on Text {
    sys {
      id
    }
    text
    size
  }
`;
