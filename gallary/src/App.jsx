import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [sit, setSit] = useState([])
  const [index, setIndex] = useState(1)

  async function getdata(){
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
   
    setSit(response.data)
   
  }
   let printit="No data";
   if(sit.length>0){
    printit=sit.map(function(elem, idx){
      return<div key={idx}>
       <a href={elem.url}>
         <div 
      className='h-50 w-55  overflow-hidden'>
        <img 
        className='h-full w-full object-cover'
        src={elem.download_url} alt='images' />
      </div>
      <h1 className='font-bold text-xl'>{elem.author}</h1>
       </a>
      </div>
    })
   }
   const prev =()=>{
    setIndex(index-1)
   }
   const next =()=>{
    setIndex(index+1) 
   }

   useEffect(() => {
     getdata()
   }, [index])

  return (
    <>
     
    <div>
       <div className='flex flex-wrap gap-8 mx-5 my-5'>
      {printit}
     </div>
     <div className='flex justify-center items-center px-8 py-8'>
    <button
    onClick= {() => { 
      if(index > 1)
         {prev()}
     }}
    className='text-bold text-xl px-8 py-8'>prev</button>
    <h1 className='item-center'>{index}</h1>
     <button 
     onClick={next}
     className='text-bold text-xl px-8 py-8'>next</button>
    </div>
    </div>
    </>
  )
}

export default App
