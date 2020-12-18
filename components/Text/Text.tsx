import React from "react";
import { Text } from "@generated/types";
import ReactMarkdown from "react-markdown";

const TextComponent = (props: Text) => (
  <div>
    <ReactMarkdown>{props.text}</ReactMarkdown>
  </div>
);

export default TextComponent;
