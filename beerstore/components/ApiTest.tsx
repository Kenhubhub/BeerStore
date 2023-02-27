"use client"

import { useEffect } from "react";

const Test = ()=>{
    useEffect(()=>{
        const fetchBeer = async ()=>{
            const data = await fetch('https://localhost:7153/Products');
            console.log(data)
        }
        fetchBeer();
    })
    return <h1>Hello World</h1>
}

export default Test;