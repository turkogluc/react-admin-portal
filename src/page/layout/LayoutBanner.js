import React from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  GlobalOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Badge } from 'antd';
import './Style.less';
import { getUsernameAvatar } from '../../component/UserAvatar';

const { Header } = Layout;
const { SubMenu } = Menu;

function LayoutBanner({ collapsed, handleOnCollapse }) {
  const getCollapseIcon = () => {
    if (collapsed) {
      return (
        <MenuUnfoldOutlined onClick={handleOnCollapse} className="trigger" />
      );
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className="trigger" />;
  };

  const handleLanguageMenuClick = () => {};
  const handleSettingMenuClick = () => {};
  const handleLogout = () => {};

  return (
    <Header className="header" style={{ background: '#fff', padding: 0 }}>
      <div
        style={{
          float: 'left',
          width: '100%',
          alignSelf: 'center',
          display: 'flex',
        }}
      >
        {window.innerWidth > 992 && getCollapseIcon()}
      </div>
      <Menu
        // onClick={this.handleLanguageMenuClick}
        mode="horizontal"
        className="menu"
      >
        <SubMenu title={<QuestionCircleOutlined />} />
      </Menu>
      <Menu
        // onClick={this.handleLanguageMenuClick}
        mode="horizontal"
        className="menu"
      >
        <SubMenu
          title={
            <Badge dot>
              <BellOutlined />
            </Badge>
          }
        />
      </Menu>
      <Menu
        onClick={handleLanguageMenuClick}
        mode="horizontal"
        className="menu"
      >
        <SubMenu title={<GlobalOutlined />}>
          <Menu.Item key="en">
            <span role="img" aria-label="English">
              🇺🇸 English
            </span>
          </Menu.Item>
          <Menu.Item key="it">
            <span role="img" aria-label="Italian">
              🇮🇹 Italian
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Menu onClick={handleSettingMenuClick} mode="horizontal" className="menu">
        <SubMenu title={getUsernameAvatar('Cemal')}>
          <Menu.Item key="setting:1">
            <span>
              <UserOutlined />
              Profile
            </span>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <span>
              <LogoutOutlined onClick={handleLogout} />
              Logout
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default LayoutBanner;
