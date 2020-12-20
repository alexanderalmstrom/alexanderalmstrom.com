import { gql } from "@apollo/client";
import { Media } from "./media";
import { Text } from "./text";

export const Blocks = gql`
  fragment Blocks on Block {
    sys {
      id
    }
    componentsCollection(limit: 2) {
      items {
        ...Text
        ...Media
      }
    }
  }

  ${Text}
  ${Media}
`;
