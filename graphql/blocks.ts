import { gql } from "graphql-request";
import { Media } from "./media";
import { Text } from "./text";

export const Blocks = gql`
  fragment Blocks on Block {
    sys {
      id
    }
    componentsCollection(limit: 4) {
      items {
        __typename
        ...Text
        ...Media
      }
    }
  }

  ${Text}
  ${Media}
`;
