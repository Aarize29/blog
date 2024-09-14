
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
     const[posts,setPosts]=useState([])


     const[title,setTitle]=useState('')
     const[content, setContent]=useState('')

     const getpost=async()=>{

         const res=await fetch("http://localhost:5000/posts",{
          method:"GET",
          headers:{
            'content-type':'application/json'
          }
         })

         const data=await res.json()
        setPosts(data)
         console.log(data)

     }


     useEffect(() => {
       getpost()

     }, [])
     

     const handleSubmit=async(e)=>{
       e.preventDefault()
       const res= await fetch("http://localhost:5000/posts",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({ 
          title:title,
          content:content
        })

       })

       const data=await res.json()
       if(data.status==='ok'){
         window.location.reload()
       }
       
     }

  return (
    <>
      
      <h1> Blog Website</h1>

      <form onSubmit={handleSubmit}>
          <h3>Add blog</h3>
          <label>Title:
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea type='text' value={content} onChange={(e)=>setContent(e.target.value)}/>
          </label>

          <button type='submit'>Add</button>
      </form>

      {posts.map((e,k)=>
        
        <>
          <h1  key={k}>{e.title}</h1>
          <p key={k}>{e.content}</p>
        </>
        
      )}


    </>
  )
}

export default App
