import { gql } from "@apollo/client";
import { Asset } from "./asset";
import { Blocks } from "./blocks";

export const Page = gql`
  fragment Page on Page {
    sys {
      id
    }
    name
    slug
    title
    description
    text
    image {
      ...Asset
    }
    blocksCollection(limit: 20) {
      items {
        ...Blocks
      }
    }
  }

  ${Asset}
  ${Blocks}
`;
