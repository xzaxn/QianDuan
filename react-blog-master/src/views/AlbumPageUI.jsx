import {memo, useState} from 'react';
import AlbumItem from '../components/album/AlbumItem';
import {Empty} from 'antd';
import MyPagination from '../components/MyPagination';

export default memo(function AlbumPageUI({data}) {
 const {list, count} = data.read().data.data;
 const [page, setPage] = useState(1);
 return (
     <>
      <div className={'album-container'}>
       {count === 0 ? <Empty/> : ''}
       {list.slice((page - 1) * 24, page * 24).map((item) => {
        return <AlbumItem key={item.id} data={item}/>;
       })}
       <MyPagination current={page} setPage={setPage} total={count} pageSize={24}/>
      </div>
     </>
 );
});
