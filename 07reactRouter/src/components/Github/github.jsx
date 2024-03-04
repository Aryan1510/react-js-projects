import React from 'react'
import { useLoaderData } from 'react-router-dom'

function github() {
    const data = useLoaderData()
   // const [data,setData] = useState( [] )
   // useEffect(() =>{
       // fetch('https://api.github.com/users/Aryan1510').then(response => response.json())
       // .then(data =>{
           // console.log(data);
           // setData(data)
       // })
   // }, []
  //  )
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    github followers: {data.followers}
    <img src="{data.avatar_url}" alt="git picture" width={300} />
    </div>
  )
}

export default github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Aryan1510')
    return response.json()
}