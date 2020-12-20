import styles from "@styles/pages/Page.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { Page } from "@generated/types";
import { Pages } from "@interfaces/pages";
import { addApolloState, initializeApollo } from "@lib/apolloClient";
import { GET_PAGES, GET_PAGE } from "@graphql/pages";
import Layout from "@components/Layout";
import Block from "@components/Block";

interface Props {
  page: Page;
}

const PageBySlug = ({ page }: Props) => {
  return (
    <Layout title={page.title || page.name} description={page.description}>
      <article className={styles.root}>
        <header className={styles.header}>
          {page.image && (
            <div className={styles.image}>
              <img
                className={styles.img}
                src={page.image.url}
                alt={page.image.title}
              />
            </div>
          )}
          <h1 className={styles.title}>{page.name}</h1>
        </header>
        {page.text && (
          <ReactMarkdown className={styles.text}>{page.text}</ReactMarkdown>
        )}
        {page.blocksCollection.items.map((block) => (
          <Block key={block.sys.id} block={block} />
        ))}
      </article>
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
    revalidate: true,
  });
};
