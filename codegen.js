const space = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_ACCESS_TOKEN;

module.exports = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${space}`]: {
        headers: {
          Authorization: `Bearer ${token}`,
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
