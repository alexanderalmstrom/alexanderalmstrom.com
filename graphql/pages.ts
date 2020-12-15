import { gql } from "@apollo/client";

export const PAGE = gql`
  fragment Page on Page {
    sys {
      id
    }
    name
    slug
    text
  }
`;

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
