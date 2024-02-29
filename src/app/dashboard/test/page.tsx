'use client'

import React from 'react';
import { List, Button } from 'antd';

const dataList = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

function MyList() {
  const handleButtonClick = (item:any) => {
    // 在按钮点击事件中处理对应列表项的数据
    console.log('Clicked item:', item);
  };

  const renderListItem = (item:any) => {
    return (
      <List.Item actions={[<Button onClick={() => handleButtonClick(item)}>Get Data</Button>]}>
        {item.name}
      </List.Item>
    );
  };

  return (
    <List
      dataSource={dataList}
      renderItem={renderListItem}
    />
  );
}

export default MyList;