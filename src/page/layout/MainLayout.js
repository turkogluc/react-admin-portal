import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderMenu from './SiderMenu';
import LayoutBanner from './LayoutBanner';
import './Style.less';
import RoutingList from '../../router/RoutingList';

const { Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleOnCollapse = () => {
    setCollapsed(prevState => !prevState);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
      <Layout>
        <LayoutBanner
          collapsed={collapsed}
          handleOnCollapse={handleOnCollapse}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 20 }}>
            <RoutingList />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
