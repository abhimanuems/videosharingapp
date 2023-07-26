import React from 'react'
import Slider from './Slider'
import ButtonList from './ButtonList'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex shadow overflow-hidden">
      <div>
        <Slider />
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-1 gap-4">

          <ButtonList />
          <Outlet/>
        </div>
      </div>
    </div>
  );
};


export default Body