import React, { useState, useEffect } from 'react'
import { getPayloadFromToken } from '../helpers/auth'
import axios from 'axios'
const UserProfile = () => {

  const userId = getPayloadFromToken().sub
  console.log(userId)

  const [user, setUser] = useState('')
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/${userId}`)
      setUser(data)
    }
    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('WHAT IS THIS', user)


  




  return (
    
      <div className="userInfo">
        <li key={user.username}> Username - {user.username}</li>
        <li key={user.gamertag}>Gamertag - {user.gamertag} </li>
        <li key={user.coins}>Coins - {user.coins} </li>
        <li key={user.wins}> Wins: {user.wins} - Losses:{user.losses} </li>
        {/* <li key={user.last_name}>{user.teams}</li> */}
        <button> Edit </button>
      </div>
    
  )
}

export default UserProfile
