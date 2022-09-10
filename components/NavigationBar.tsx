import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';

type NavigationBarProps = {
  children: React.ReactNode;
};

const { Header, Content } = Layout;
export const NavigationBar = ({ children }: NavigationBarProps) => {
  const menuItems = [{ label: 'Sign In', key: 'sign-in' }];
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <Row justify="end">
          <Col span={24}>
            <Menu mode="horizontal" items={menuItems} />
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};
