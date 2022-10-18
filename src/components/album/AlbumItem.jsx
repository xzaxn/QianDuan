import {memo, Suspense} from 'react';
import {Empty} from 'antd';
import {NavLink} from 'react-router-dom';
import {getPostSrc} from '../../requests/blog';
import AlbumItemUI from './AlbumItemUI';
import {dataFecther} from '../../utils/dataFecther';
import dayjs from 'dayjs';

export default memo(function AlbumItem({data}) {
 return (
     <>
      <NavLink to={`/album/${data.id}`} className={'album-item'}>
       <Suspense fallback={Empty.PRESENTED_IMAGE_DEFAULT}>
        <AlbumItemUI data={dataFecther(getPostSrc, data.postId)}/>
       </Suspense>
       <div className={'album-title'}>
        <div className={'album-title-name'}>
         {data.name}
        </div>
        <div className={'album-title-count'}>
         {data.images.length}张照片
        </div>
        <div className={'album-title-count'} style={{bottom: '-4px'}}>
         {dayjs(parseInt(data.time)).format('YYYY/MM/DD')}
        </div>
       </div>
      </NavLink>
    </>
  );
});
