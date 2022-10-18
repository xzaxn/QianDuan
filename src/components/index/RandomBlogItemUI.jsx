import { memo } from "react";

export default memo(function RandomBlogItemUI({ data }) {
  const { gzipSrc } = data.read().data.data;
  return (
    <>
      <img src={gzipSrc} alt={"header"} />
    </>
  );
});
