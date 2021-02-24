import React from 'react';

import { Layout, Menu } from 'antd';
import './layout.css';

const LayoutContainer = (props) => {
  const { Header, Content, Footer } = Layout;

  const onScroll = () => {
    alert(1);
  };
  return (
    <Layout className='layout' onScroll={onScroll}>
      <Header className='header-top'></Header>
      <Header className='header'>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>Logo</Menu.Item>
        </Menu>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>Trang chủ</Menu.Item>
          <Menu.Item key='2'>Tour trong nước</Menu.Item>
          <Menu.Item key='3'>Tour nước ngoài</Menu.Item>
          <Menu.Item key='4'>Dịch vụ du lịch</Menu.Item>
          <Menu.Item key='5'>Liên hệ</Menu.Item>
        </Menu>
      </Header>
      <Content className='content'></Content>
      <Footer className='footer' style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutContainer;
