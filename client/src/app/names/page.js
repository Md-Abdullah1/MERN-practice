"use client";
import React, { useEffect, useState } from "react";
import axios from   "../../apis/axios"

const page = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  
    const HandleName = async () => {
      try{
        const res = await axios.post('/names',{name:newName})
        if (res.status === 200) {
          console.log('result',res.data);
          setNames(res.data.people);
        } else {
          // Handle error if request was not successful
          console.error('Error:', res.status);
        }
      }
      catch(error){
          console.log('error in hand;ling',error)
      }
    };

  const fetchNames = async () => {
    // const res = await fetch("http://localhost:9000/api/names");
    // const data = await res.json();
    // console.log(data.people);
    const res = await axios.get('/names');
    console.log('response',res.data)
    setNames(res.data.people);
  };
  return (
    <div className="flex justify-evenly p-10">
    
      <div className="flex gap-5 bg-blue-200">
        <input
          placeholder="add name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={HandleName}>add Name</button>
      </div>
      <div >
        <button onClick={fetchNames}>fetch Names</button>
        {names.map((name) => {
          return <div key={name}>{name}</div>;
        })}
      </div>
    </div>
  );
};

export default page;
