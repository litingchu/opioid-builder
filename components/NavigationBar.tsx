import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';

type NavigationBarProps = {
  children: React.ReactNode;
};

const { Content } = Layout;

export const NavigationBar = ({ children }: NavigationBarProps) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState<string>('');

  useEffect(() => {
    switch (router.pathname) {
      case '/reports/create':
        setSelectedKey('create');
        break;
      case '/sign-in':
        setSelectedKey('sign-in');
        break;
      case '/':
        setSelectedKey('');
        break;
      default:
        setSelectedKey('');
    }
  }, [router.pathname]);

  const menuItems = [
    { label: 'Create', key: 'create' },
    { label: 'Sign In', key: 'sign-in' }
  ];

  const handleMenuItemClick = ({ key }: { key: string }) => {
    if (key === 'create') {
      router.push('reports/create');
    }
  };

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Menu
        selectedKeys={[selectedKey]}
        mode="horizontal"
        items={menuItems}
        style={{ justifyContent: 'end' }}
        onClick={handleMenuItemClick}
      />
      <Content style={{ padding: '50px' }}>{children}</Content>
    </Layout>
  );
};
