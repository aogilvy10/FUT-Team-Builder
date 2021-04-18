import React, { useEffect, useState } from 'react'
import { getPayloadFromToken } from '../helpers/auth'
import axios from 'axios'
import { Link } from 'react-router-dom'


const HomePage = () => {

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
        <p>Gamertag - {user.gamertag} </p>
        <p>coins - {user.coins} </p>
        <p>{user.wins} - {user.losses} </p>
      </div>
      <div className="Info about the app "> INFO FUT - TEAM - BUILDER </div>
      <div> SLIder for showiong info of different things</div>

      <ul>
        <Link to="/teams/new">
          <li>
            create a team
        </li>
        </Link>
        <Link to="/userteams">
          <li>
            View your teams
        </li>
        </Link>
        <Link to="/teamfeed">
          <li>
            view all teams
        </li>
        </Link>
        <Link to="/userprofile">
          <li>
            go to Your profile
        </li>
        </Link>
      </ul>

    </>
  )
}

export default HomePage
