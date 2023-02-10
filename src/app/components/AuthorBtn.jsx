import React from 'react'

export default function AuthorBtn(props) {
  return (
    <div>
      <div className="d-flex gap-4 justify-content-center my-5">
        <div className='author-yellow-line'></div>
        <div onClick={ () => props.filter(props.author) } className="authorBtn-container px-3 py-4 w-50 d-flex justify-content-between align-items-center">
          <div>{ (props.author) ? props.author : "Annonymous" }</div>
          <i className="arrow-icon bi bi-arrow-right-square"></i>
        </div>
      </div>
    </div>
  )
}
