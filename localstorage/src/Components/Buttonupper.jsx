import React, { useEffect, useState } from 'react'

const Buttonupper = (props) => {
      const [data, setData] = useState("");
  const upper = () => {
    setData((prev) => prev.toUpperCase());
    
  };
const copyit=()=>{
    navigator.clipboard.writeText(data)
    alert("copied to clipboard")
}

  useEffect(() => {upper()});
  return (
    <div>
       <div>
        <h1>{props.text}</h1>
        <textarea
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          rows={10}
        ></textarea>
        <button
          onClick={() => {
            upper();
          }}
        >
          uppercase
        </button>
        <button onClick={()=>{
          setData("")
        }}>clear</button>


        <button onClick={()=>{
            copyit()
        }}>copy</button>

        
      </div>
      <h1>{data.split(" ").length} words {data.length} characters</h1>
    </div>
  )
}

export default Buttonupper
