import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UserTeams = () => {
  const { id } = useParams()
  const [teams, setTeams] = useState('')



  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get(`/api/teams/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTeams(data)
      console.log(data)
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log('TEAMS', teams)
  
  

  return (
    <div key={teams.id}>
      <h1>{teams.player}</h1>
    </div>
  )
}







export default UserTeams
