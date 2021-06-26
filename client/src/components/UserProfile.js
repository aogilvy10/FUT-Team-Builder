import React, { useState, useEffect } from 'react'
// import { getPayloadFromToken } from '../helpers/auth'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const UserProfile = () => {

  const {userId} = useParams()
  console.log('userId',userId)

  const [user, setUser] = useState('')
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/${userId}/`)
      setUser(data)
    }
    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  if (!user) return null
  return (
      <div className="user-profile">
          <div className="nav-bar">
            <Link to="/home">
              <p className="home">Home</p>
            </Link>
            <p key={user.username}> ❕ {user.username}</p>
            <p key={user.gamertag}>⚽️--- GAMERTAG ➖{user.gamertag} </p>
            <p key={user.coins}>💰--- COINS ➖{user.coins} </p>
            <p key={user.wins}> 🏆---{user.wins} ➖{user.losses} </p>
          </div>
        <div className="userInfo">
          <h1>USER PROFILE</h1>
          {user.teams.map((team) => {
            console.log(team)
            return (
              <>
              <div className="content">
                <p className="top-content">{team.owner.username}</p>
                <p className="top-content">{team.team_name}</p>
                <p>{team.formation.name}</p>
                <img src="https://www.fifauteam.com/wp-content/uploads/2018/10/A1654-13.jpg" alt="fifa"></img>
              </div>
              </>
            )
          })}
        </div>
      </div>
    
  )
}

export default UserProfile
