import { gql } from "@apollo/client";
import { Page } from "./page";

export const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageCollection(limit: 1, where: { slug: $slug }) {
      items {
        ...Page
      }
    }
  }

  ${Page}
`;
