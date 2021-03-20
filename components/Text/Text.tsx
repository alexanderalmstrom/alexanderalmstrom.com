import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import styles from "./Text.module.scss";
import { Text } from "@generated/types";

const TextComponent = ({ text, size }: Text) => {
  return (
    <div
      className={classNames(styles.root, {
        [`col-${size}`]: !!size,
      })}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default TextComponent;
