import styles from "@assets/page.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { Page } from "@generated/graphqlTypes";
import { addApolloState, initializeApollo } from "@lib/apolloClient";
import { Pages } from "@interfaces/pages";
import { GET_PAGES, GET_PAGE } from "@graphql/pages";

interface Props {
  page: Page;
}

const PageBySlug = ({ page }: Props) => {
  return (
    <div className={styles.root}>
      <h1>{page.name}</h1>
      <ReactMarkdown>{page.text}</ReactMarkdown>
    </div>
  );
};

export default PageBySlug;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<Pages>({
    query: GET_PAGES,
  });

  const paths = data.pageCollection.items.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<Pages>({
    query: GET_PAGE,
    variables: {
      slug: params.slug,
    },
  });

  const page = data.pageCollection.items[0];

  return addApolloState(apolloClient, {
    props: {
      page,
    },
    revalidate: 1,
  });
};
