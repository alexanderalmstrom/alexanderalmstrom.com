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
          return <img key={media.sys.id} src={media.url} />;
        case "video/mp4":
          return (
            <video
              key={media.sys.id}
              src={media.url}
              autoPlay
              muted
              loop
            ></video>
          );
      }
    })}
  </div>
);

export default MediaComponent;
