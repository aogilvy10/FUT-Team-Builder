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

  console.log(teams)
  
  

  return (
    <div>
      
    </div>
  )
}







export default UserTeams
