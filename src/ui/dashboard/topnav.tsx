"use client";

import { Layout, Menu } from "antd";

const { Header } = Layout;

const items = [
  { key: 1, label: "Dashboard" },
  { key: 2, label: "test" },
];

const TopNav = () => {
  return (
    <Header>
      <div className="demo-logo" />
      <Menu
        className="flex justify-center"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Header>
  );
};

export default TopNav;
