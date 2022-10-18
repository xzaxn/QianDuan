import { memo } from "react";
import ContentCardItem from "../components/home/ContentCardItem";
import MyPagination from "../components/MyPagination";
import { Empty } from "antd";

export default memo(function HomePageUI({ data, page, setPage }) {
  const { list, count } = data.read().data.data;

  return (
    <>
      {count === 0 ? <Empty /> : <></>}
      <div className={"left-content-article"}>
        {list.map((item) => {
          return <ContentCardItem data={item} key={item.id} />;
        })}
      </div>
      {count === 0 ? (
        ""
      ) : (
        <div className={"left-content-pagination"}>
          <MyPagination current={page} total={count} setPage={setPage} pageSize={10} />
        </div>
      )}
    </>
  );
});
