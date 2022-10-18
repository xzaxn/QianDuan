import { memo } from "react";
import { Card } from "antd";

const { Meta } = Card;
export default memo(function LeftSiderUI({ data }) {
  const { userName, userHeader, userDescription } = data.read().data.data;
  return (
    <>
      <Card
        className={"left-sider-my-card"}
        cover={
          <img
            className={"left-sider-my-img"}
            alt="example"
            loading={"lazy"}
            src={userHeader}
            style={{ objectFit: "cover" }}
          />
        }
      >
        <Meta title={userName} description={userDescription} style={{ textAlign: "center" }} />
      </Card>
    </>
  );
});
