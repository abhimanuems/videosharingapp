import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Ulitis/appSlice';

const Header = () => {
  const dispatch=useDispatch();
  const handleClickMenu =()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="flex justify-between shadow-md">
      <div className=" flex">
        <img
        onClick={handleClickMenu}
          className="h-10 w-10 m-3 mt-5 cursor-pointer"
          alt="menu-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAASFBMVEX///8AAAD8/PxUVFTBwcEjIyP5+fmYmJjq6uqbm5t4eHiwsLAgICDFxcV7e3tdXV3U1NSDg4Pg4OBnZ2dKSkqJiYkTExOioqJTkzgYAAABDUlEQVRoge3aSw6CMBRG4V5FHoryUHD/O1XirKUmDm5/B+fbwEkN0No2BAAAAOBXbffoT14eXbtfbcxZs1c9e1fNzmn14l81u8TVui+R7esoey1RNbtG2aVMdomytzLZ23+MtiqTreIneS1RXeMnWfTehjD5V6e0GsLTu/rcq75noGY4uhmazAy0ObjJNwEAOIyVmzE3B9XO64spWUhtZt/oZk6rrX/VLF1g3Etk75LBpsN1XzZ+xItH0V8vUVb0I4seKdELpPpciD6OqqkgiCY+AACCZvNPs9XZ+c7ymY1dzTa26LBNc0QhOpDhsM1BPFrRQaro2Fh22Ka5EqC6AOF73aPPXvcAAAAAvngBoYwfqA6acywAAAAASUVORK5CYII="
        />
        <img
          className="h-10 w-20 m-5"
          alt="logo"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        />
      </div>
      <div className=" mt-5 items-center ">
        <input className="border rounded-l-full" type="search" />
        <button className="border rounded-r-full" >
        search
        </button>
      </div>
      <div className="items-end cursor-pointer">
        <img
          className="h-10 w-10 my-4 mr-6"
          alt="profile-icon"
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        />
      </div>
    </div>
  );
}

export default Header