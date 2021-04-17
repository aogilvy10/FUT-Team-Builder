import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TeamFeed = () => {


  const [users, setUsers] = useState('')

  //get all users and their users

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/auth/login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUsers(data)
    }
    getData()
  }, [])

  console.log('LOOK HERE', users)





  if (!users) return null
  return (
    <ul>
      {users.map((user) => {
        return (
          <div>
            <Link to={{
              pathname: `/users/${user.id}`,
              state: {user}
            }}>
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
