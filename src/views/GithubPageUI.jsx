import { memo, useState } from "react";
import GithubItem from "../components/github/GithubItem";
import MyPagination from "../components/MyPagination";

export default memo(function GithubPageUI({ data }) {
  const result = data.read().data;
  const [page, setPage] = useState(1);
  return (
    <>
      {result.slice((page - 1) * 10, page * 10).map((item) => {
        return <GithubItem key={item.id} detail={item} />;
      })}
      <MyPagination current={page} total={result.length} setPage={setPage} pageSize={10} />
    </>
  );
});
