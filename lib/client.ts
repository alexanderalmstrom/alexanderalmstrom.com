import { GraphQLClient } from "graphql-request";

const space = process.env.CONTENTFUL_SPACE;
const token = process.env.CONTENTFUL_TOKEN;
const env = process.env.CONTENTFUL_ENV
  ? `/environments/${process.env.CONTENTFUL_ENV}`
  : "";

export const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${space}${env}`,
  {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
);
