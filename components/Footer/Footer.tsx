import { forwardRef } from "react";
import styles from "./Footer.module.scss";
import WavePattern from "../../assets/wave-pattern.svg";
import { title, description } from "@config/seo.json";

interface Props {}

const Footer = ({}: Props, ref) => {
  return (
    <footer className={styles.root} ref={ref}>
      <WavePattern className={styles.wave} />
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
