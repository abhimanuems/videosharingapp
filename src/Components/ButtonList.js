import React from 'react'
import Buttons from './Buttons'

const list =["All","Lionel Messi","News","Live","football","virat kholi","Namasthe dev","Akshay saini","Javascript","Node js","React js","mongo db","Express js ","Bengaluru"]
const ButtonList = () => {
  return (
    <div className="flex m-2 p-2">
        {
            list.map((obj,index)=>{
                return <Buttons key={index} name={obj} />;
            })
        }
    </div>
  );
}

export default ButtonList

