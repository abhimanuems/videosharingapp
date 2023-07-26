import React, { useEffect, useState } from 'react'
import youtubeAPI from '../Ulitis/config';
import VideoCard from './VideoCard';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';

const Maincontainer = () => {

  const [video,setVideo] = useState([]);
  useEffect(()=>{
    callYoutube();
    
  },[])
  const callYoutube = async() => {
    const data = await fetch(youtubeAPI);
    const json=await data.json();
    setVideo(json.items);
  };
  return !video.length ? (
    <ShimmerUI />
  ) : (
    <div className="pt-3 flex flex-wrap">
      {video.map((obj) => (
        <Link to={"/watch/" + obj.id}>
          <VideoCard info={obj} key={obj.id} />;
        </Link>
      ))}
    </div>
  );
}

export default Maincontainer