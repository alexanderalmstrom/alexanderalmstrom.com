import styles from "@styles/pages/Page.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "graphql-request";
import ReactMarkdown from "react-markdown";
import { GetPageQuery, Page } from "@generated/types";
import { GET_PAGE } from "@graphql/pages";
import Layout from "@components/Layout";
import Block from "@components/Block";
import { client } from "@lib/client";

interface Props {
  page: Page;
}

const PageWithSlug = ({ page }: Props) => {
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
          <h1 className={styles.title} data-text={page.name}>
            {page.name}
          </h1>
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

export default PageWithSlug;

export const getStaticPaths: GetStaticPaths = async () => {
  const { pageCollection } = await client.request<GetPageQuery>(
    gql`
      query Pages {
        pageCollection(limit: 100) {
          items {
            slug
          }
        }
      }
    `
  );

  const paths = pageCollection.items.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageCollection } = await client.request<GetPageQuery>(GET_PAGE, {
    slug: params.slug,
  });

  return {
    props: {
      page: pageCollection.items[0],
    },
    revalidate: 1,
  };
};
