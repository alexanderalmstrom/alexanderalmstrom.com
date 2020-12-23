import React from "react";
import styles from "./Media.module.scss";
import classNames from "classnames";
import { Media } from "@generated/types";

const MediaComponent = ({ mediaCollection, size }: Media) => (
  <div
    className={classNames(styles.root, {
      [`col-${size}`]: !!size,
    })}
  >
    {mediaCollection.items.map((media) => {
      switch (media.contentType) {
        case "image/jpeg":
          return (
            <img
              key={media.sys.id}
              className={styles.img}
              src={`${media.url}?w=2560&q=75&fm=jpg&fl=progressive`}
            />
          );
        case "video/mp4":
          return (
            <video
              key={media.sys.id}
              className={styles.video}
              src={media.url}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          );
      }
    })}
  </div>
);

export default MediaComponent;
