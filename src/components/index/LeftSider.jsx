import '../../assets/style/Index/leftSider.scss';
import {memo, Suspense, useState} from 'react';
import {Button, Collapse} from 'antd';
import store from '../../reducer/resso';
import {
  GithubOutlined,
  HomeOutlined,
  PictureOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import Tags from '../tags/Tags';
import BackStageLogin from './BackStageLogin';
import {getUserInfo} from '../../requests/index';
import LeftSiderUI from './LeftSiderUI';
import {dataFecther} from '../../utils/dataFecther';

const {Panel} = Collapse;

export default memo(function () {
  let {siderHide} = store;
  let [visible, setVisible] = useState(false);
  return (
      <div className={'total-sider ' + (siderHide ? 'sider-hide' : 'sider-show')}>
        <div className={'left-sider-container'}>
          <div className={'left-sider'}>
          <NavLink className={"left-sider-my"} to={"/about"}>
            <Suspense fallback={""}>
              <LeftSiderUI data={dataFecther(getUserInfo)} />
            </Suspense>
          </NavLink>
          <NavLink to={"/"}>
            <Collapse bordered={false} expandIcon={() => <HomeOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="首页" key="1" />
            </Collapse>
          </NavLink>
          <NavLink to={"/album"}>
            <Collapse bordered={false} expandIcon={() => <PictureOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="相册" key="2" />
            </Collapse>
          </NavLink>
          <NavLink to={"/timeline"}>
            <Collapse bordered={false} expandIcon={() => <SendOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="时间线" key="3" />
            </Collapse>
          </NavLink>
          <NavLink to={"/github"}>
            <Collapse bordered={false} expandIcon={() => <GithubOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="Github展示" key="4" />
            </Collapse>
          </NavLink>
          <NavLink to={"/about"}>
            <Collapse bordered={false} expandIcon={() => <UserOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="关于我" key="4" />
            </Collapse>
          </NavLink>
          <Tags />
        </div>
      </div>
      <div className={"left-sider-footer"}>
        <Button
            type={"text"}
            className={"left-sider-footer-button"}
            onClick={() => {
              setVisible(true);
            }}
            disabled={true}
        >
          <SettingOutlined />
          后台
        </Button>
        <Button type={"text"} className={"left-sider-footer-button"} disabled={true} onClick={() => {}}>
          待开发
        </Button>
        <Button type={"text"} className={"left-sider-footer-button"} disabled={true} onClick={() => {}}>
          待开发
        </Button>
        <BackStageLogin visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
});
