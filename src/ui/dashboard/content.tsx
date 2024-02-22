'use client'

import {Layout, Breadcrumb, theme} from 'antd'

const {Content} = Layout;

const MainContent = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: '0 48px' }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </div>
    </Content>
  )
}

export default MainContent;