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
          <div className="column">
            <p>Gamertag - {user.gamertag} </p>
            <p>coins - {user.coins} </p>
            <p>{user.wins} - {user.losses} </p>
          </div>
        </div>
          <div className="columns mt-6  mb-0">
            <div className="column"></div>
            <div className="column"> </div>
            <div className="column is-4 pl-0"> <p className="column-dark "> Create</p> </div>
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
        <div className="">
          <div className="columns main-page-column">
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column is-6 column-dark m-1"> 
            <div className="column pl-0"><h1 className="">INFO FUT - TEAM - BUILDER </h1>  </div>
            <div className="columns"> 
            <div className="column"> <p className="p-explanation">Welcome to FUT-Team-builder where you can create your favourite teams from FUT. You can view any player in the top 10 of the Premier League.  </p>
            <div className="columns"> 

            <div className="column"></div>
            <img src={mane} alt="" className="image column image-mane mt-6  ml-0  " /></div></div>
            </div>
            </div>
            <div className="column is-3 column-dark m-1"> <h2>Squad Building Challenges </h2> 
            <p className="mt-3"> Remember to use the search bar when checking out all the different players. </p> 
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
                    create a team
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/userteams">
                  <p className="column  is-vcentered">
                    View your teams
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/teamfeed">
                  <p className="column">
                    view all teams
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/userprofile">
                  <p className="column">
                    go to Your profile
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
