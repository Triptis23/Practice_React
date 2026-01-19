import React, { useState } from 'react'

const Gen = () => {
 const [passwor, setPasswor] = useState("");
 const [upper, setUpper] = useState(true);
 const [lower, setLower] = useState(true);  
 const [number, setNumber] = useState(true);
 const [symbol, setSymbol] = useState(false);
 const [length, setLength] = useState(8);

 const generate = () =>{
  let  chars=""
  let result=""
 if(upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 if(lower) chars += "abcdefghijklmnopqrstuvwxyz";
 if(number) chars += "1234567890"
 if(symbol) chars += "!@#$%^&*"
 
 for(let i=0; i<length; i++){
 let indexvalues = (Math.floor(Math.random()*chars.length));
 result += chars[indexvalues]
 }

setPasswor(result)
 }

 const copyit = () => {
    navigator.clipboard.writeText(passwor)
     alert("copied to clipboard")
     console.log("copied to clipboard");
 }


  return (
    <div className='flex flex-col items-center '>
      <div className='border-2 rounded gap-15 h-100 w-200 flex flex-col items-center bg-blue-100 p-5 mt-10'>
        <h1 className='font-bold text-3xl'> Password Generator</h1>
        
        <div>
        <input  className=" border-2 px-3 py-1 rounded text-2xl" value={passwor} readOnly />
        <button 
        onClick={()=>{
            copyit()
        }}
        className='border-2 mx-2 px-3 py-1 rounded bg-blue-800 text-amber-50 active:bg-blue-950'>copy</button>
      </div>
      <div>
       <input 
       className='border-2 rounded pl-5'
       type='number' value={length}
       onChange={(e)=>
        setLength(e.target.value)
       }/>

        <input 
        checked={upper}
        onClick={()=>{
            setUpper(!upper)
        }}
        type="checkbox" className='mx-2 ' />
        <label className='text-lg'>Uppercase</label>
         <input
           checked={lower}
        onClick={()=>{
            setLower(!lower)
        }}
         type="checkbox" className='mx-2' />
        <label className='text-lg'>Lowercase</label>
         <input 
         checked={number}
         onClick={()=>{
            setNumber(!number)
        }}
         type="checkbox" className='mx-2' />
        <label className='text-lg' >Numbers</label>
         <input 
         checked={symbol}
         onClick={()=>{
            setSymbol(!symbol)
        }}
         type="checkbox" className='mx-2' />
        <label className='text-lg'>Symbol</label>
      </div>
      <div>
        <button
        onClick={generate}
        className='border-2 px-3 py-1 rounded bg-blue-800 text-amber-50 active:bg-blue-950'>Generate Password</button>
      </div>

      </div>
    </div>
  )
}

export default Gen
