import { gql } from "@apollo/client";
import { MEDIA } from "./media";
import { TEXT } from "./text";

export const BLOCKS = gql`
  fragment Block on Block {
    componentsCollection(limit: 2) {
      items {
        ...Text
        ...Media
      }
    }
  }

  ${TEXT}
  ${MEDIA}
`;
