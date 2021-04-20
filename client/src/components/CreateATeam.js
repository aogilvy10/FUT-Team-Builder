import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import axios from 'axios'
import PlayerCard from './PlayerCard'
// import { Link } from 'react-router-dom'
// import { getPayloadFromToken } from '../helpers/auth'

const CreateATeam = () => {
  // const userId = getPayloadFromToken().sub

  const [formData, setFormData] = useState({
    team_name: '',
    abbreviation: '',
    team_logo: '',
    formation: '',
    players: [],
  })

  // const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }


  const handleSubmit = async event => {
    try {
      event.preventDefault()
      const token = window.localStorage.getItem('token')
      console.log(formData)
      const response = await axios.post('/api/teams/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log('RESPONSE',response)
    } catch (err) {
      console.log(err)
    }
  }

  //get all players
  const [allPlayers, setAllPlayers] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/players/')
      setAllPlayers(data)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // search for players 
  console.log('>>>>', allPlayers)
  const [search, setSearch] = useState(null)
  const searchSpace = event => {
    const keyword = event.target.value
    setSearch(keyword)
  }
  console.log(search)

  // add players to team

  const handleChangeTeam = event => { 
    const playerToPush = event.target.value
    if (formData.players.includes(playerToPush)) { 
      return formData.players.pop(playerToPush) 
    } else { 
      formData.players.push(playerToPush)
    }
    console.log(formData.players)
  }

  //add players to card

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <input className="input" type="text" placeholder="Team Name" name="team_name" onChange={handleChange} />
        </div>
        <div className="control">
          <input className="input" type="text" placeholder="Abbreviation" name="abbreviation" onChange={handleChange} />
        </div>
        <div className="control">
          <input className="input" type="text" placeholder="Team Logo" name="team_logo" onChange={handleChange} />
        </div>
        <div className="control">
          <div className="select">
            <select name="formation" onChange={handleChange}>
              <option hidden disabled selected>Select Formation</option>
              <option value="4">4-4-2</option>
              <option value="2">4-3-3</option>
              <option value="3">4-1-2-1-2</option>
            </select>
          </div>
        </div>
        <div className="control">
          <input className="input" type="text" placeholder="players" name="players" onChange={handleChange} />
        </div>
        {/* <Link to={'/userprofile'}> */}
        <div className="control">+-
          <button className="button is-primary">Create Team</button>
        </div>
        {/* </Link> */}
      </form>
      {allPlayers.filter((data) => (search === null || search === '') ? data : (data.nationality.toLowerCase().includes(search.toLowerCase()) || data.first_name.toLowerCase().includes(search.toLowerCase()) || data.last_name.toLowerCase().includes(search.toLowerCase()) || data.team_name.toLowerCase().includes(search.toLowerCase()) || data.position.toLowerCase().includes(search.toLowerCase()))
      ).map((data) => (
        <div key={data.id} className="card-content">
          <button className="button" value={data.id} onClick={handleChangeTeam} >
            <div className="card-image">
              <figure className="image is-4b3">
                {/* <img src={data.photo} alt="" /> */}
              </figure>
              <li>{data.first_name} {data.last_name}</li>
              <li>{data.team_name}</li>
              <li>{data.nationality}</li>
              <li>{data.position}</li>
            </div>
          </button>
        </div>
      )
      )}
      <div>
        <input type="text" placeholder="Enter item to be searched" onChange={searchSpace} />
        {allPlayers.name}
      </div>
    <div>
      <PlayerCard />
    </div>
    </div>
  )
}

export default CreateATeam
