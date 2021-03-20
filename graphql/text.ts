import { gql } from "graphql-request";

export const Text = gql`
  fragment Text on Text {
    sys {
      id
    }
    text
    size
  }
`;
