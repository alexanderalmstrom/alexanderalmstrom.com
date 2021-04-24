import styles from "./Text.module.scss";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { Text as TextProps } from "@generated/types";

export default function Text({ text, size }: TextProps) {
  return (
    <div
      className={classNames(styles.root, {
        [`col-${size}`]: !!size,
      })}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}
