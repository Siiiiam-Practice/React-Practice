import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './comment'

export default function App() {
  const [comments, setComment] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json())
    .then(datas => setComment(datas));
  },[])

  return (
    <>
    <div className='grid grid-cols-3'>
      {comments.map(data => <Comments data={data}/>)}
    </div>
    </>
  )
}