import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RandomNav from './components/RandomNav'
import Quotes from './components/Quotes'
import Author from './components/Author'
import AuthorBtn from './components/AuthorBtn'

export default function App() {

  const [data, setData] = useState(null)
  const [index, setIndex] = useState(null)
  const [quotes, setQuotes] = useState([])
  const [showAuthor, setShowAuthor] = useState(false)

  useEffect(() => {
   if (data === null) {
    getData()
      .then(res => { 
        setData(res.data)
        let index = getRandomIndex(res.data.length)
        setIndex(index)
        setQuotes([res.data[index].text])
      })
   }

   if (data !== null) {
    random()
  }
  }, [])

  async function getData() {
    const data = await axios
      .get("https://type.fit/api/quotes")
    return data
  }
  
  function getRandomIndex(limit) {
    return Math.floor(Math.random() * limit)
  }

  function random() {
    setIndex(getRandomIndex(data.length))
    setShowAuthor(false)
    setQuotes([data[index].text])
  }

  function filterAuthor(author) {
    let arr = []
    let subdata = data.filter(i => i.author === author)
    subdata.map(i => arr.push(i.text))
    setQuotes(arr)
    setShowAuthor(true)
  }

  return (
    (data !== null) ? 
    <div className='vw-100 vh-100 px-5 py-3 mb-3'>
      <RandomNav random={ random }/>
      {
        (showAuthor) ?
        <Author author={ data[index].author }/> :
        <div className='d-flex my-5'></div>
      }
        <Quotes quote={ quotes } />
      {
        (!showAuthor) ?
        <AuthorBtn author={ data[index].author } filter={ filterAuthor }/> :
        <div></div>
      }
      <div className='text-center my-5'>Created by <a className='' href='https://claretdevigne.netlify.app'>CLARET DEVIGNE</a></div>
    </div> :
    <div></div>
  )
}
