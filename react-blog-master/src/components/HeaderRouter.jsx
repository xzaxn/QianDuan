import { memo } from "react";
import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

export default memo(function HeaderRouter({ path = "/", name = "详情", subTitle = "" }) {
  let navigator = useNavigate();
  return (
    <>
      <PageHeader
        className="blog-title-site-page-header"
        onBack={() => navigator(-1)}
        title={name}
        subTitle={subTitle}
        style={{
          paddingBottom: "5px",
          paddingTop: "5px",
          width: "100%",
          paddingLeft: "10px",
        }}
      />
    </>
  );
});
