import React from 'react'
import { useState, useEffect } from 'react';
const Timer = () => {
    const [amount, setAmount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{amount}</h1>
    </div>
  )
}

export default Timer
