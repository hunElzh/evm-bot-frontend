"use client";

import { Layout, Menu, Button } from "antd";
import ConnectButton from "./connect_button";


const { Header } = Layout;

const items = [
  { key: 1, label: "zksync" },
  { key: 2, label: "zkevm" },
];

const TopNav = () => {

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
      <div style={{width: '20%'}}>
        <ConnectButton /> 
      </div>
    </Header>
  );
};

export default TopNav;
