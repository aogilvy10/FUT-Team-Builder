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
  console.log(user)
  return (
    <>
      <div className="userInfo">
        <p> Username - {user.username}</p>
        <p>Gamertag - {user.gamertag} </p>
        <p>coins - {user.coins} </p>
        <p>{user.wins} - {user.losses} </p>
      </div>
      <button> Edit </button>
    </>
  )
}

export default UserProfile
