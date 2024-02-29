"use client";

import { Layout, Menu } from "antd";
import ConnectButton from "./connect_button";


const { Header } = Layout;

const TopNav = () => {

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, minWidth: 0 }}
      />
      <div style={{width: '20%'}}>
        <ConnectButton /> 
      </div>
    </Header>
  );
};

export default TopNav;
