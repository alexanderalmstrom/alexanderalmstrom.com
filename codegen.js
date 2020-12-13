module.exports = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: ["./**/*.ts", "./**/*.tsx", "!__generated__", "!node_modules"],
  overwrite: true,
  generates: {
    "./__generated__/graphqlTypes.ts": {
      plugins: ["typescript"],
    },
  },
};
