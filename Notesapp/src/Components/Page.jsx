import React, { useState, useSyncExternalStore } from 'react'
import { Trash } from 'lucide-react';
const Page = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [task, setTask] = useState([])

    const submitit = (e) => {
        e.preventDefault();

        const newtask = [...task];
        newtask.push({ title, note });
        setTask(newtask);

        setTitle('');
        setNote('');
    }


  const delteit = (idx) => {
    const newtask = [...task];
    newtask.splice(idx, 1);
    setTask(newtask);
  }

  

  return (
    <div className='bg-gray-800 w-full h-screen flex'>
    <div  className='w-3/7'>
         <form 
        onSubmit={(e)=>{
            submitit(e)
        }}
     >
         
        <h1 className='text-white text-4xl font-bold pt-10 px-10'>Welcome to Notes App</h1>
        <div className='flex flex-col items-start gap-5 px-10 pt-10'>
          <input
            type='text'
            value={title}
            onChange={(e)=> {
                setTitle(e.target.value)
            }}
            placeholder='Enter your note here...'
            className='p-4 w-4/5 text-white rounded-lg border border-white bg-transparent'
          />
          <textarea
            placeholder='Your notes...'
            value={note}
            onChange={(e)=> {
                setNote(e.target.value)
            }}
            className='p-4 w-4/5 h-32 text-white rounded-lg border border-white bg-transparent'
          ></textarea>
          <button className='text-white border active:scale-95 border-white px-8 py-3 w-4/5 rounded-2xl'>Submit</button>
        </div>
      
     </form>
    </div>


      <div className='w-2/3 flex gap-5'>
        {task.map(function(elem, idx){
        return  <div key={idx} className='bg-white w-70 h-70 my-10 rounded-2xl p-4 flex justify-between'>
            
                <div>
                    <h2 className='text-2xl font-semibold mb-4 '>{elem.title}</h2>
                    <p> {elem.note}</p>
            
                </div>
               <div>
                 <button
                onClick={()=>{
                    delteit(idx)
                }} 
                ><Trash /></button>
               </div>
        </div>
 } )
}
      </div>
    </div>
  )
}

export default Page
