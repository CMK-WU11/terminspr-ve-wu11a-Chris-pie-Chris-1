// taget fra en tidligere opgave

'use client'
import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
               const tokenResponse = await fetch(url)
               const tokenData = await tokenResponse.json();
               setData(tokenData)
        }
        fetchData()
       
    },[url])
    return {data}
}