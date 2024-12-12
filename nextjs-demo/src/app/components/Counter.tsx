"use client";
import React,{ useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    console.log("Counter Component",count);
    
    return (
        <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
)
};
