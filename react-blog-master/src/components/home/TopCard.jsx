import { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function TopCard({ data }) {
  const result = data.read();
  return (
    <NavLink to={`/blog/${result.id}`} className={"left-content-topcard"}>
      <div className={"left-content-topcard-img-container"} style={{ textAlign: "center" }}>
        <img src={result.gzipSrc} className={"left-content-topcard-img"} alt={""} />
      </div>
      <div className={"left-content-topcard-text-container"} style={{ color: result.color }}>
        <div className={"left-content-topcard-text-title"}>
          <span className="left-content-topcard-top-icon" style={{ marginTop: "5px" }}>
            置顶
          </span>
          {result.title}
        </div>
        <div className={"left-content-topcard-text-content"}>{result.content}</div>
      </div>
    </NavLink>
  );
});
