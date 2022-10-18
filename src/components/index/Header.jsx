import '../../assets/style/Index/header.scss';
import {memo} from 'react';
import {Button, Input} from 'antd';
import store from '../../reducer/resso';
import {AppstoreFilled, SearchOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

const {Search} = Input;
export default memo(function () {
 let {setSiderHide, siderHide, headerOtherHide, setHeaderOtherHide} = store;
 let navigator = useNavigate();
 const onSearch = (content) => {
  setHeaderOtherHide();
  navigator(`/search?type=search&text=${content}`);
 };
 return (
    <div className={"header"}>
      <Button
        type={"text"}
        onClick={() => setSiderHide(!siderHide)}
        className={"search-button-min"}
        icon={<AppstoreFilled />}
      />
      <div className={"header-logo"}>Pikachu的博客</div>
      <div className={"header-right"}>
        <Button type={"text"} onClick={setHeaderOtherHide} className={"search-button-min"} icon={<SearchOutlined />} />
        <div className={"header-right-others " + (headerOtherHide ? "hide" : "show")}>
          <div
            className={"header-right-others-mask " + (headerOtherHide ? "hide" : "show")}
            onClick={setHeaderOtherHide}
          />
          <Search placeholder="搜索文章" allowClear onSearch={onSearch} className={"search-button-max"} />
        </div>
      </div>
    </div>
  );
});
