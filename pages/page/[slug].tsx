import styles from "@styles/pages/Page.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { Page } from "@generated/types";
import { addApolloState, initializeApollo } from "@lib/apolloClient";
import { Pages } from "@interfaces/pages";
import { GET_PAGES, GET_PAGE } from "@graphql/pages";
import Layout from "@components/Layout";

interface Props {
  page: Page;
}

const PageBySlug = ({ page }: Props) => {
  return (
    <Layout title={page.name}>
      <div className={styles.root}>
        {page.image && <img src={page.image.url} alt={page.image.title} />}
        <h1>{page.name}</h1>
        <ReactMarkdown>{page.text}</ReactMarkdown>
        {page.blocksCollection.items.map((block) => {
          return (
            <div key={block.sys.id}>
              {JSON.stringify(block.componentsCollection.items, null, 2)}
            </div>
          );
        })}
      </div>
    </Layout>
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
