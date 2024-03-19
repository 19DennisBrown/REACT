
import React, {useState, useEffect} from 'react'
import axios from 'axios'




function Fetch(){
  const fetching = async()=>{
     await axios.get()
    .then(response=>{console.log(response.data)})
    .catch(error=>{console.log(error)})
  }
  useEffect(()=>{
    fetching()
  }, [])
  return <>
    <h2>
      Fetching API
    </h2>
  </>
}

export default Fetch