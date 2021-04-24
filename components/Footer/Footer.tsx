import styles from "./Footer.module.scss";
import { forwardRef } from "react";
import Waves from "../../assets/waves.svg";
import { title, description } from "@config/seo.json";

type FooterProps = {};

const Footer = ({}: FooterProps, ref) => {
  return (
    <footer className={styles.root} ref={ref}>
      <Waves className={styles.waves} />
      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.email}>
            <a href="mailto:alexander@alexanderalmstrom.com">
              alexander@alexanderalmstrom.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default forwardRef(Footer);
