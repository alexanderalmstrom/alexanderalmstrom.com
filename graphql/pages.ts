import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query GetPages {
    pageCollection {
      items {
        sys {
          id
        }
        name
        slug
        text
      }
    }
  }
`;

export const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
        name
        slug
        text
      }
    }
  }
`;
