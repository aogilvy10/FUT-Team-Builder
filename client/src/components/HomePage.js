import React, { useEffect, useState } from 'react'
import { getPayloadFromToken } from '../helpers/auth'
import axios from 'axios'
import { Link } from 'react-router-dom'
import mane from '../assets/mane.png'
import futchamp from '../assets/sbc_set_image_1000073-36bf671a-223b.png'



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
      <div className="user-info">
        <div className="columns">
          <div className="column" id="nav-bar">
            <p>⚽️--- GAMERTAG ➖ {user.gamertag} </p>
            <p>💰--- COINS ➖ {user.coins} </p>
            <p>🏆---{user.wins} ➖ {user.losses} </p>
          </div>
        </div>
          <div className="columns mt-6  mb-0">
            <div className="column"></div>
            <div className="column"> </div>
            <div className="column is-4 pl-0 ml-2 p-0"> <p className="column-dark pl-2" id="top-bar m-1" > BUILD-THE-BEST-TEAM-POSSIBLE</p> 
            </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column "> </div>
            <div className="column "></div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
          </div>
        <div className="column">
          <div className="columns main-page-column">
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column is-6 column-dark m-2"> 
            <div className="column pl-0"><h1 className="team-builder"> FUT-TEAM-BUILDER </h1>  </div>
            <div className="columns"> 
            <div className="column"> <p className="p-explanation">Welcome to FUT-Team-Builder where you can create your favourite teams from FUT. You will have your choice from the top players in the english premier league.  </p>
            <div className="columns"> 

            <div className="column"></div>
            <img src={mane} alt="" className="image column image-mane mt-6  ml-0  " /></div></div>
            </div>
            </div>
            <div className="column is-3 column-dark m-2"> <h2>Squad--Building--Challenges </h2> 
            <p className="mt-3"> Create the best team possible when searching through our set of players. </p> 
            <img src={futchamp} alt="" className="image image-fut column "/></div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
          </div>
          <div >
            <div className="columns mt-6">
              <div className="column columns is-centered is-blue m-1">
                <Link to="/teams/new">
                  <p className="column">
                    Create A Team
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/users/:userId">
                  <p className="column  is-vcentered">
                    View Your Teams
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/teamfeed">
                  <p className="column">
                    View All Teams
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/userprofile">
                  <p className="column">
                    Your profile
              </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
