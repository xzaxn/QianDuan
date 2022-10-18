import { memo } from "react";
import { NavLink } from "react-router-dom";
import { PaperClipOutlined } from "@ant-design/icons";

export default memo(function TagsUI({ data }) {
  const result = data.read().data.data;
  return (
    <>
      {result.map((item) => {
        return (
          <NavLink to={`/search?type=tags&text=${item.text}`} key={item.id}>
            <li className={"left-sider-menu-item ant-collapse-header"}>
              <PaperClipOutlined /> {item.text}
            </li>
          </NavLink>
        );
      })}
    </>
  );
});
