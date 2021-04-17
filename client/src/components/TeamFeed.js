import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TeamFeed = () => {


  const [teams, setTeams] = useState('')

  //get all users and their teams

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/auth/login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTeams(data)
    }
    getData()
  }, [])

  console.log(teams)





  if (!teams) return null
  return (
    <ul>
      {teams.map((user) => {
        return (
          <div>
            <Link to={`/api/teams/${user.id}`}>
              <h3>{user.username}</h3>
              <li>{user.teams.map((userTeam) => {
                return (
                  <p>{userTeam.team_name}</p>
                  )
                })}</li>
            </Link>

          </div>
        )
      })}
    </ul>
  )
}

export default TeamFeed
