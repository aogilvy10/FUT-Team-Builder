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
      <div className="columns">
        <div className="column"> INFO FUT - TEAM - BUILDER </div>
        <div className="column"> SLIder for showiong info of different things</div>
        <div >
          <ul className="columns">
            <Link to="/teams/new">
              <li className="column">
                create a team
        </li>
            </Link>
            <Link to="/userteams">
              <li className="column">
                View your teams
        </li>
            </Link>
            <Link to="/teamfeed">
              <li className="column">
                view all teams
        </li>
            </Link>
            <Link to="/userprofile">
              <li className="column">
                go to Your profile
        </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HomePage
