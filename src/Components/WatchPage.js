import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Ulitis/appSlice';
import { useParams } from 'react-router-dom';
import { API } from '../Ulitis/config';

const WatchPage = () => {
    const params=useParams();
    const dispatch = useDispatch();
    const [data,setData]=useState([]);
    useEffect(()=>{
        dispatch(closeMenu());
        callYoutubeVideo();

    },[]);
    const callYoutubeVideo =async () => {
      const data =await  fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params.id}&key=${API}}`
      );
      const json =await data.json();
      console.log(json)
    };
  return (
    <div className=' ml-4'>
      <iframe
        width="956"
        height="538"
        src={"https://www.youtube.com/embed/"+params.id}
        title="ഓഹ് PSG.....! നെയ്മർ ഉടൻ മടങ്ങി വന്നേ പറ്റൂ | Neymar | Football News"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage