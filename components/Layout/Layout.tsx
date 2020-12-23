import Head from "next/head";
import { useRef } from "react";
import styles from "./Layout.module.scss";
import { title, description } from "@config/seo.json";
import Header from "@components/Header";
import Footer from "@components/Footer";
import useIntersectionObserver from "hooks/useIntersect";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const Layout = ({ children, ...props }: Props) => {
  const footerRef = useRef<HTMLElement | null>(null);

  const [isVisible, entry] = useIntersectionObserver({
    elementRef: footerRef,
    threshold: buildThresholdArray(),
  });

  return (
    <>
      <Head>
        <title>{props.title ? `${props.title} - ${title}` : title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.description || description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div
          className={styles.vertical}
          style={{
            opacity: 1 - (entry?.intersectionRatio || 0),
          }}
        >
          {description}
        </div>
        {children}
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default Layout;
