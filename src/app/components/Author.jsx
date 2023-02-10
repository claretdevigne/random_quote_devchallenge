import React from 'react'

export default function Author(props) {
  return (
    <div>
      <div className="d-flex gap-4 justify-content-center my-5">
        <div className="author-yellow-line"></div>
        <div className="w-50 px-3 fw-bold fs-4">{ (props.author) ? props.author : "Annonymous" }</div>
      </div>
    </div>
  )
}
