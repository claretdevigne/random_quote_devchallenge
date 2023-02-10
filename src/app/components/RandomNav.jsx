import React from 'react'

export default function RandomNav(props) {
  return (
    <div onClick={() => props.random() } className='pointer d-flex gap-2 justify-content-end align-items-center'>
      random 
      <i className="bi bi-arrow-clockwise"></i>
    </div>
  )
}
