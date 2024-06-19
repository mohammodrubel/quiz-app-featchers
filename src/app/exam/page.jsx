"use client"
import React, { useState } from 'react';
import { Tabs, Button } from 'antd';
import Jlpt_category from '@/components/Jlpt_category';
import Jlct_category from '@/components/Jlct_category';


const App = () => {
  const [activeKey, setActiveKey] = useState('1');

  const onChange = (key) => {
    setActiveKey(key);
  };

  const items = [
    {
      key: '1',
      tab: (
        <Button size="large" style={{ padding: '0 40px' }} type={activeKey === '1' ? 'primary' : 'dashed'}>
          JLPT
        </Button>
      ),
      content: <Jlpt_category />,
    },
    {
      key: '2',
      tab: (
        <Button size="large" style={{ padding: '0 40px' }} type={activeKey === '2' ? 'primary' : 'dashed'}>
          JLCT
        </Button>
      ),
      content: <Jlct_category />,
    },
  ];

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Tabs activeKey={activeKey} onChange={onChange}>
        {items.map(item => (
          <Tabs.TabPane key={item.key} tab={item.tab}>
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default App;
