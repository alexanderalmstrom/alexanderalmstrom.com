require("dotenv").config({ path: "./.env.local" });

module.exports = {
  client: {
    service: {
      name: "contentful",
      url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  },
};
