import { gql } from "@apollo/client";

export const ContentfulText = gql`
  fragment ContentfulText on Text {
    sys {
      id
    }
    text
    size
  }
`;
