import { gql } from "@apollo/client";
import { Page } from "./page";

export const GET_PAGES = gql`
  query GetPages {
    pageCollection {
      items {
        ...Page
      }
    }
  }

  ${Page}
`;

export const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageCollection(where: { slug: $slug }) {
      items {
        ...Page
      }
    }
  }

  ${Page}
`;
