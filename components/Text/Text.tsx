import React from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { Text } from "@generated/types";

const TextComponent = ({ text, size }: Text) => (
  <div
    className={classNames(styles.root, {
      [`col-${size}`]: !!size,
    })}
  >
    <ReactMarkdown>{text}</ReactMarkdown>
  </div>
);

export default TextComponent;
