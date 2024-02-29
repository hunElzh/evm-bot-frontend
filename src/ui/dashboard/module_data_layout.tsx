"use client";

import { Module } from "@/types";
import { Button, Collapse, Divider, List, Modal, Table, TableColumnsType, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

interface ModuleGroupDataType{
  [key:string]: Module[]
}


const ModuleCollapse = ({ modules }: { modules: Module[]}) => {
  // modal state
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  // script state
  const [module, setModule] = useState({} as Module);
  const [signer, setSigner] = useState({});
  // message state 
  const [messageApi, contextHolder] = message.useMessage();
  // collapse && table
  const [moduleGroupData, setModuleGroupData] = useState({} as ModuleGroupDataType);

  

  useEffect(() => {
    const groupData : ModuleGroupDataType = {};

    modules.forEach((module) => {
      if(!groupData[module.type]) {
        groupData[module.type] = [];
      }
      groupData[module.type].push(module)
    })

    setModuleGroupData(groupData);
  },[])

  const test = () => {
    
  }

  // modal function
  const handleOk = async () => {
    setConfirmLoading(true);
    // 2. 执行sendTransaction操作  会返回什么？
    const tx = await module.sendTransaction(signer);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setModule({} as Module)
    setOpen(false);
  };


  // script function
  const executeScript = async (module: Module) => {
    const accounts = await window.ethereum.request({
      "method": "eth_accounts",
      "params": []
    });

    if(accounts.length < 1) {
      messageApi.error('请连接 metamask 钱包')
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    setSigner(signer);

    const fee = await module.estimateGasFee(signer);
    console.log(fee)
    
    setModalText(`gas费为${fee}$确认执行吗`);
    setModule(module);
    setOpen(true);
  }

  return (
    <>
      {contextHolder}
      <Button onClick={test}>test</Button>

      {
        Object.keys(moduleGroupData).map((type, index) => {
          return (
            <Collapse
              size="large"
              items={[{ key: index, label: type, children:  <ModuleDataTable modules={moduleGroupData[type]} />}]}
            />
          )
        })
      }

      {/* <List
        itemLayout="horizontal"
        dataSource={modules}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button key="setPrompt" disabled>设置参数</Button>,
              <Button key="execute" onClick={() => executeScript(item)}>执行</Button>
            ]}
          >
            <List.Item.Meta
              key={item.title}
              // avatar={
              //   <Avatar
              //     src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              //   />
              // }
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      /> */}
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};



const ModuleDataTable = ({modules}: {modules: Module[]}) => {

  type TableRowSelection<T> = TableProps<T>['rowSelection'];

  interface DataType {
    key: React.Key;
    name: string;
    description: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: '项目名称',
      dataIndex: 'name',
    },
    {
      title: '操作描述',
      dataIndex: 'description',
    }
  ];

  const data: DataType[] = modules.map(m => ({
    key: m.title,
    name: m.title,
    description: m.description
  }))

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  )
}

export default ModuleCollapse;