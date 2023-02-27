"use client"

import { useState, useEffect } from "react";
import IProduct from "@/Interfaces/ProductInterface";
import Card from "./Card";
const Cards = ()=>{
    const [Products,setProducts] = useState<IProduct[]>([]);
    useEffect(()=>{
        const fetchBeer = async ()=>{
            const data  = await fetch('https://localhost:7153/Products');
            const fetchedProducts  = data.json();
            setProducts(await fetchedProducts);
        }
        fetchBeer();
        
    },[])
    return (
        <div className="card-container">
            {
                Products.map(P =>(
                    <Card Product ={P}/>
                ))
            }
            
        </div>
    )
}

export default Cards;