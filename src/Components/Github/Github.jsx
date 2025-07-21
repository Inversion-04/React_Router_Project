import React , {useState,useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

  const data = useLoaderData()
    
/*

you can use this method asw ell for api call but loader method is fast and optimised

const[data,setData] = useState([])
useEffect(()=>{
    fetch(`https://api.github.com/users/Inversion-04`)
    .then((response)=> response.json())
    .then((data)=>setData(data))
})

*/

  return (
    <div className='text-center m-4 bg-gray-600 text-black p-4 text-3xl'>GitHub Followers: {data.followers}
    <img  className = 'mx-auto mt-4 rounded-full shadow-lg' src={data.avatar_url} alt="Git Picture" width = {300}/>
    </div>
  )
}

export default Github 

export const githubInfoLoader = async()=>{
  const response  = await fetch('https://api.github.com/users/Inversion-04')
  return response.json();
}