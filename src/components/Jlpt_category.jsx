import React from 'react';
import { Tabs } from 'antd';
import Test1 from './N5/Test1';


const { TabPane } = Tabs;

const JlptCategory = () => {
  const items = [
    {
      key: '1',
      tab: <b>N5</b>,
      content: <Test1 />,
    },
    {
      key: '2',
      tab: <b>N4</b>,
      content: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      tab: <b>N3</b>,
      content: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      tab: <b>N2</b>,
      content: 'Content of Tab Pane 4',
    },
    {
      key: '5',
      tab: <b>N1</b>,
      content: 'Content of Tab Pane 5',
    },
  ];

  const onChange = (key) => {
    console.log(`Selected tab key: ${key}`);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      {items.map(item => (
        <TabPane key={item.key} tab={item.tab}>
          {item.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default JlptCategory;
