import React from 'react';
import { Progress, Space } from 'antd';

const Bar: React.FC = () => (
  <Space wrap style={{margin: 'auto' }}>
    <Progress type="circle" percent={80} format={(percent) => `${percent}  marginity`} />
    <Progress type="circle" percent={100} format={() =>'Profit'} />
    <Progress type="circle" percent={20} format={() =>'Loss'} />
  </Space>
);

export default Bar;