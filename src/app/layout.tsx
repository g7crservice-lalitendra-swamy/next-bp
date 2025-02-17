"use client"
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header } from 'antd/es/layout/layout';
import { Provider } from 'react-redux';
import store from '@/redux/store';

// Define menu items
const menuItems = [
  {
    key: '/',
    label: (
      <Link href="/">Home</Link>
    ),
  },
  {
    key: '/best-practices',
    label: (
      <Link href="/best-practices">Best Practices</Link>
    ),
  },
  {
    key: '/concepts',
    label: (
      <Link href="/concepts">Concepts</Link>
    ),
  },
];

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body style={{ margin: '0px', backgroundColor: '#f5f5f5' }}>
      <Provider store={store} >
        <Header style={{ color: 'white', fontSize: '20px', marginBottom: '15px' }}>Next</Header>
        <Menu style={{ width: '95vw', margin: 'auto' }} mode="horizontal" theme="dark" selectedKeys={[pathname]} items={menuItems} />
        <AntdRegistry>{children}</AntdRegistry>
      </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
