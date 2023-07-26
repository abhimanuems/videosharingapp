import React from 'react'

const Buttons = (props) => {
  return (
    <div>
        <button className='border bg-gray-400 p-2 m-2 rounded-lg'>{props.name}</button>
    </div>
  )
}

export default Buttons