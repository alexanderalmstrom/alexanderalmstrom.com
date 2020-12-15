import Head from "next/head";
import { title, description } from "@config/seo.json";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Head>
        <title>{props.title ? `${props.title} - ${title}` : title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.description || description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
