"use client";

import { Layout, Avatar, List, theme } from "antd";
import { ethers } from "ethers";

const { Content } = Layout;

const MainContent = ({
  project,
  provider,
}: {
  project: Project[];
  provider: ethers.providers.Web3Provider;
}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: "0 48px" }}>
      <div
        style={{
          padding: "0 24px 0 24px",
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={project}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="项目简介"
              />
            </List.Item>
          )}
        />
      </div>
    </Content>
  );
};

export default MainContent;
