import styles from "./Media.module.scss";
import classNames from "classnames";
import { Media as MediaProps } from "@generated/types";
import { useInView } from "react-intersection-observer";

export default function Media({ mediaCollection, size }: MediaProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  if (
    inView &&
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
                ref={ref}
                key={media.sys.id}
                className={styles.img}
                src={`${media.url}?w=100`}
                data-src={`${media.url}?w=2560&q=75&fm=jpg&fl=progressive`}
                alt={media.title}
                width={media.width}
                height={media.height}
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
}
