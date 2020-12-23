import React, { useEffect, useRef } from "react";
import styles from "./Media.module.scss";
import classNames from "classnames";
import { Media } from "@generated/types";
import useIntersectionObserver from "hooks/useIntersect";

const MediaComponent = ({ mediaCollection, size }: Media) => {
  const imgRef = useRef(null);

  const [isVisible, entry] = useIntersectionObserver({
    elementRef: imgRef,
    threshold: 0.1,
  });

  if (
    isVisible &&
    entry.isIntersecting &&
    entry.target instanceof HTMLElement &&
    !entry.target.classList.contains("is-loaded")
  ) {
    const { src } = entry.target.dataset;

    entry.target.setAttribute("src", src);
    entry.target.classList.add("is-loaded");
  }

  return (
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
                ref={imgRef}
                key={media.sys.id}
                className={styles.img}
                src={`${media.url}?w=100`}
                data-src={`${media.url}?w=2560&q=75&fm=jpg&fl=progressive`}
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
};

export default MediaComponent;
