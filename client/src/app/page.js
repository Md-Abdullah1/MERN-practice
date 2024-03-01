'use client';
// import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "../apis/axios"
export default function Home() {
  const [data,setData] = useState('loading');
  const [people,setPeople] = useState([]); 

  useEffect( ()=>{
     async ()=>{
      
      try{
      const res = await axios.get('localhost:9000/api/home')
      console.log('data',res)
      setData(res.message)
      setPeople(res.people)
    } 
    catch(error){
      console.log('error',error)
    }}
  },[]);
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-200">
          <h1>hi {data}</h1>
          <ul>
            {people.map(name=><li key={name}>{name}</li>)}
          </ul>
         </main>
  );
}
