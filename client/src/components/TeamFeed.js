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
    <div className="entire">
      <Link to='/home'>
        <p className="home">HOME</p>
      </Link>
    <ul className="feed">
      <h1>TEAM FEED</h1>
      {users.map((user) => {
        return (
          <div className="feed-center">
            <Link to={{
              pathname: `/users/${user.id}`,
              state: { user }
            }}>
              <h3>  {user.username}</h3>
              <li className="feed-container">{user.teams.map((userTeam) => {
                return (
                  <Link to={`/teams/${userTeam.id}`}>
                    <div class="container">
                        <p> TEAM NAME  ➖ {userTeam.team_name}
                        </p> 
                        <p className="abbreviation">{userTeam.abbreviation}
                        </p>
                        <img src="https://www.fifauteam.com/wp-content/uploads/2018/10/A1654-13.jpg" alt="fifa"></img>
                    </div>
                  </Link>
                
                )
              })}</li>
            </Link>
          </div>
        )
      })}
    </ul>
    </div>
  )
}

export default TeamFeed
