import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Slider = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen){
        return null;
    }
  return (
    <div className="p-3">
      <ul className="shadow p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className="shadow p-3">
        <li>Libarary</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
}

export default Slider