import React from "react";

export default function Quotes (props) {


  return (
    <div>
      {
        props.quote.map((value, key) => {
          return(
            <div key={key} className="d-flex gap-4 justify-content-center mt-5">
              <div className="bg-warning author-yellow-line"></div>
              <div className="w-50 px-3">{"\"" + value + "\""}</div>
            </div>
          )
        })
      }
    </div>
  )  
}