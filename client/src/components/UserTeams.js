import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserTeams = () => {

  const [teams, setTeams] = useState('')

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('/api/teams/')
      setTeams(data)
  
    }
    getData()
  }, [])

  console.log('TEAMS', teams)
  
  

  return (
    <div>
      <h1>User teams</h1>
    </div>
  )
}







export default UserTeams
