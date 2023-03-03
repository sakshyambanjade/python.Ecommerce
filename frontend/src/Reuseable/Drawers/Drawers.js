import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Drawers: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      
      <Drawer placement="left" onClose={onClose} open={open}>
        <div className='catagory'>
        <h1>Welcome to </h1>
      <li><Button type="primary" danger href="./buy">Buy</Button></li>
      <br></br>
      <li><Button type="primary" success href="./sell">Sell</Button></li>
      </div>
      </Drawer>
    </>
  );
};

export default Drawers;