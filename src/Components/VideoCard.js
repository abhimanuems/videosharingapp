import React from 'react'

const VideoCard = ({info}) => {
const { snippet, statistics } = info;
  return (
    <div className='m-1'>
      <img className='rounded-lg' src={snippet.thumbnails.medium.url} alt="videoThumb" />
      <h6 className='font-bold'>{snippet.channelTitle}</h6>
      <h6>total views:{statistics.viewCount}</h6>
    </div>
  );
}

export default VideoCard