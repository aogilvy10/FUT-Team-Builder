import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TeamFeed = () => {


  const [teams, setTeams] = useState('')

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/teams/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTeams(data)
    }
    getData()
  }, [])

  console.log(teams)





  return (
    <h1>ELloo</h1>
  )
}

export default TeamFeed
