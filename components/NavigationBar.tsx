import React from 'react';
import { Layout, Menu } from 'antd';

type NavigationBarProps = {
  children: React.ReactNode;
};

const { Content } = Layout;

export const NavigationBar = ({ children }: NavigationBarProps) => {
  const menuItems = [{ label: 'Sign In', key: 'sign-in' }];
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Menu mode="horizontal" items={menuItems} style={{ justifyContent: 'end' }} />
      <Content style={{ padding: '50px' }}>{children}</Content>
    </Layout>
  );
};
