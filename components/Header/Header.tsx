import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import Link from "next/link";

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className={styles.root}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/page/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
