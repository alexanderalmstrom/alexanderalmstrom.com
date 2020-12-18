import { Media } from "@generated/types";
import React from "react";

const MediaComponent = ({ mediaCollection }: Media) => (
  <div>
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
