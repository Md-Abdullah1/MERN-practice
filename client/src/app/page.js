'use client';
// import Image from "next/image";
import { useEffect, useState } from "react";
// import axios from "@/apis/"
export default function Home() {
  const [data,setData] = useState('loading');
  const [people,setPeople] = useState([]); 

  useEffect(()=>{
     fetch('http://localhost:9000/api/home')
     .then(response=>response.json())
     .then((res)=>{console.log('data',res)
    setData(res.message)
   setPeople(res.people)})
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
