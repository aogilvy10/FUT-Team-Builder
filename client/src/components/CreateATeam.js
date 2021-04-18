import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import axios from 'axios'
// import { getPayloadFromToken } from '../helpers/auth'

const CreateATeam = () => {
  // const userId = getPayloadFromToken().sub

  const [formData, setFormData] = useState({
    team_name: '',
    abbreviation: '',
    team_logo: '',
    formation: '',
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
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const [players, setPlayers] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/players/')
      setPlayers(data)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(players)
  const [search, setSearch] = useState(null)
  const searchSpace = event => { 
    const keyword = event.target.value
    setSearch(keyword)
  }
console.log(search)

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
              <option value="1">4-4-2</option>
              <option value="2">4-3-3</option>
              <option value="3">4-1-2-1-2</option>
            </select>
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">Create Team</button>
        </div>
      </form>
      {players.map((player) => {
        return (
          <div className="card" key={player.id} name={player.id}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={player.photo} alt="" />
              </figure>
            </div>
            <div className="card-content">
            <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" alt="" />
                  </figure>
                </div>
              
                <p className="title is-4"> {player.first_name} {player.last_name}</p>
                <p className="subtitle is-6"> {player.position}</p>
                <p className="card-content is-6"> {player.nationality}</p>
                <p className="card-content is-6"> {player.team_name}</p>
                </div>
              </div>
            </div>
        )
      })}
            <div>
      <input type="text" placeholder="Enter item to be searched"  onChange={searchSpace} />
      {players.name}
      </div>
          </div>
        )
      }

export default CreateATeam
