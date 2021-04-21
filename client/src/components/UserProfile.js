import React, { useState, useEffect } from 'react'
import { getPayloadFromToken } from '../helpers/auth'
import axios from 'axios'
const UserProfile = () => {

  const userId = getPayloadFromToken().sub
  console.log('userId',userId)

  const [user, setUser] = useState('')
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/${userId}`)
      setUser(data)
    }
    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  



  



  if (!user) return null
  return (
    
      <div className="userInfo">
        <div className="nav-bar">
          <p key={user.username}> Username - {user.username}</p>
          <p key={user.gamertag}>Gamertag - {user.gamertag} </p>
          <p key={user.coins}>Coins - {user.coins} </p>
          <p key={user.wins}> Wins: {user.wins} - Losses:{user.losses} </p>
        </div>
        {user.teams.map((team) => {
          console.log(team)
          return (
            <div className="content">
              <p className="top-content">{team.team_name}</p>
              <p>{team.formation.name}</p>
              <img src="https://www.fifauteam.com/wp-content/uploads/2018/10/A1654-13.jpg" alt="fifa"></img>
            </div>
          )
        })}
      </div>
    
  )
}

export default UserProfile
