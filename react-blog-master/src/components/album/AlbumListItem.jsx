import { memo, useState } from "react";
import { Image } from "antd";

export default memo(function AlbumListItem({ image }) {
  return (
    <>
      <div className={"album-list-item"}>
        <Image
          src={`${image.gzipSrc}`}
          preview={{
            src: `${image.originSrc}`,
          }}
        />
      </div>
    </>
  );
});
