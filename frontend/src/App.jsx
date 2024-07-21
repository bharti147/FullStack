import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
   <div>
    <h1>First Full-Stack App</h1>
    {jokes.map((joke)=>(
      <div key = {joke.id}>
       <h2>{joke.title}</h2> 
       <p>{joke.content}</p>
      </div>
    ))}
   </div>
  )
}

export default App

// Access to XMLHttpRequest at 'http://localhost:3000/jokes' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.