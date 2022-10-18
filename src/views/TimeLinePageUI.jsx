import {memo, useState} from 'react';
import {Timeline} from 'antd';
import dayjs from 'dayjs';
import {ClockCircleOutlined} from '@ant-design/icons';
import MyPagination from '../components/MyPagination';

export default memo(function TimeLinePageUI({data}) {
 const result = data.read().data.data;
 const [page, setPage] = useState(1);
 const temp = result.slice((page - 1) * 40, page * 40);
 return (
     <>
      <h1 style={{textAlign: 'center'}}>{dayjs(parseInt(temp[0].time)).year()}年</h1>
      <Timeline mode="alternate" className={'timeline'}>
       {temp.map((item) => {
        return (
            <Timeline.Item
                key={item.id}
                label={dayjs(parseInt(item.time)).format('YYYY-MM-DD')}
                dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}
            >
             {item.text}
            </Timeline.Item>
        );
       })}
      </Timeline>
      <MyPagination total={result.length} current={page} setPage={setPage} pageSize={40}/>
     </>
 );
});
