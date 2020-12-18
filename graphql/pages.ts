import { gql } from "@apollo/client";
import { BLOCKS } from "./blocks";
import { PAGE } from "./page";

export const GET_PAGES = gql`
  query GetPages {
    pageCollection {
      items {
        ...Page
      }
    }
  }

  ${PAGE}
`;

export const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageCollection(where: { slug: $slug }) {
      items {
        ...Page
      }
    }
  }

  ${PAGE}
`;
