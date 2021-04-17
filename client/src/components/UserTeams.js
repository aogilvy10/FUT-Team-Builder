import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UserTeams = () => {
  const { id } = useParams()
  const [user, setUser] = useState('')



  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get(`/api/auth/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          
        }
      })
      setUser(data)
      console.log(data)
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log('TEAMS', user)
  
  

  return (
    <div key={user.id}>
      <h1>{user.username}</h1>
    </div>
  )
}







export default UserTeams
