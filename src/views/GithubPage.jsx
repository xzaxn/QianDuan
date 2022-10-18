import {memo, useEffect, Suspense, startTransition} from 'react';
import '../assets/style/Github/githubItem.scss';
import HeaderRouter from '../components/HeaderRouter';
import store from '../reducer/resso';
import {service} from '../requests/request';
import {dataFecther} from '../utils/dataFecther';
import {Empty, Skeleton} from 'antd';
import GithubPageUI from './GithubPageUI';

function getRepo() {
 return service.get('https://api.github.com/users/gangganghao6/repos', {
  params: {
   sort: 'pushed',
  },
 });
}

export default memo(function GithubPage() {
 const {setSiderHide} = store;
 useEffect(() => {
  setSiderHide(true);
  window.scrollTo(0, 0);
 }, []);
 return (
     <>
      <HeaderRouter name={'GitHub展示'}/>
      <div className={'github-container'}>
       <Suspense
           fallback={
            <>
             <Skeleton active/>
             <Skeleton active/>
             <Skeleton active/>
             <Skeleton active/>
            </>
           }
       >
        <GithubPageUI data={dataFecther(getRepo)}/>
       </Suspense>
      </div>
     </>
 );
});
