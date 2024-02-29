"use client";

import { Layout, Menu, GetProp, MenuProps } from "antd";
import {
  LinkOutlined
} from "@ant-design/icons";
import React from "react";
import Link from 'next/link'

type MenuItem = GetProp<MenuProps, 'items'>[number];

const { Sider } = Layout;
const prefix = 'http://localhost:3000/dashboard/'

const items = [
  {
    key: 1,
    icon: (<LinkOutlined />),
    label: (<Link href={prefix} key={1}>evm-bot</Link>),
  }
]

const SideNav = () => {

  function getItem(): MenuItem[] {
    return [{
      key: 1,
      icon: (<LinkOutlined />),
      label: 'evm-bot',
    }];
  }

  return (
    <Sider>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default SideNav;
