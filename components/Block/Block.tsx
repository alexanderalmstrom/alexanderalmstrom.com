import React from "react";
import styles from "./Block.module.scss";
import { Block } from "@generated/types";
import Text from "@components/Text";
import Media from "@components/Media";

interface Props {
  block: Block;
}

const BlockComponent = ({ block }: Props) => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        {block.componentsCollection.items.map((component) => {
          switch (component.__typename) {
            case "Text":
              return <Text key={component.sys.id} {...component} />;
            case "Media":
              return <Media key={component.sys.id} {...component} />;
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default BlockComponent;
