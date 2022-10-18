import { memo } from "react";

export default memo(function AlbumItemUI({ data }) {
  const { gzipSrc } = data.read().data.data;
  return (
    <>
      <img loading={"lazy"} src={gzipSrc} alt={gzipSrc} />
    </>
  );
});
