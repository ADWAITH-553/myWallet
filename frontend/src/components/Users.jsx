import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
export default function Users() {
    const navigate=useNavigate()
     const [users,setUsers]=useState([])
    const [filter,setFilter]=useState("")
     useEffect(()=>{
      axios.get("http://localhost:3050/api/v1/user/search?filter="+filter)
        .then(response=>{setUsers(response.data.user)})
        console.log(filter)
        console.log(users)
    },[filter])
  return (
    <>
    <div className='pl-14 pt-20 font-bold text-2xl '>Users</div>
    <div className="my-2 mx-14 flex">
            <input onChange={(e)=>setFilter(e.target.value)} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 ml-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
        </div>
        <div className='pt-6 px-3'>
            {users.map(user => <User user={user} />)}
        </div>
    </>
  )
}
function User({user}) {
  const navigate = useNavigate();

  return <div className="flex justify-between bg-white pt-2">
      <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl">
                  {user.firstName[0]}
              </div>
          </div>
          <div className="flex flex-col justify-center h-ful">
              <div>
                  {user.firstName} {user.lastName}
              </div>
          </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
          <Button onClick={(e) => {
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }} label={"Send Money"} />
      </div>
      
  </div>
  
}