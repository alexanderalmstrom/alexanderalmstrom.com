import { gql } from "@apollo/client";
import { ContentfulPage } from "./page";

export const GET_PAGES = gql`
  query GetPages {
    pageCollection {
      items {
        ...ContentfulPage
      }
    }
  }

  ${ContentfulPage}
`;

export const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageCollection(where: { slug: $slug }) {
      items {
        ...ContentfulPage
      }
    }
  }

  ${ContentfulPage}
`;
