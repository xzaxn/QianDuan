import "../../assets/style/Index/footer.scss";
import { memo } from "react";
import Footer from "rc-footer";

export default memo(function ({ data }) {
  const result = data.read().data.data;
  return <Footer theme={"light"} columns={result} bottom={`Made by Pikachu - Powered by React`} />;
});
