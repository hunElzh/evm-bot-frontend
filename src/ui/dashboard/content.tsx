"use client";

import { Layout, Tabs } from "antd";
import { chainList } from "@/constants";
import { useEffect, useState } from "react";
import ModuleLayou from "./module_data_layout";
import { getModulesByChainId } from "@/modules";

const { Content } = Layout;

const tabItems: any = chainList.map((chain) => ({
  key: chain.chainId,
  label: chain.label,
}));

const MainContent = () => {
  const initPortent = getModulesByChainId(1101);
  const [modules, setModules] = useState(initPortent);

  useEffect(() => {
    console.log('father component')
  },[modules])

  const onChange = (key: string) => {
    const projects = getModulesByChainId(Number(key));
    setModules(projects)
  };

  return (
    <Content style={{ padding: "0 6px" }}>
      <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
      <div
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <ModuleLayou modules={modules}/>
      </div>
    </Content>
  );
};

export default MainContent;
