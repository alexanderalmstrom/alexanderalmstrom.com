import { gql } from "graphql-request";

export const Media = gql`
  fragment Media on Media {
    sys {
      id
    }
    size
    mediaCollection(limit: 20) {
      items {
        ... on Asset {
          sys {
            id
          }
          url
          title
          contentType
          width
          height
        }
      }
    }
  }
`;
