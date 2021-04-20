import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import axios from 'axios'
// import PlayerCard from './PlayerCard'
// import { Link } from 'react-router-dom'
// import { getPayloadFromToken } from '../helpers/auth'

const CreateATeam = () => {
  // const userId = getPayloadFromToken().sub

  const [formData, setFormData] = useState({
    team_name: '',
    abbreviation: '',
    team_logo: '',
    formation: '',
    players: [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11],
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
let playerToPush

  const handleChangeTeam = event => { 
    playerToPush = event.target.value
  //add players to card
  }
  const handleChangeSquad = event => { 
    console.log(' index of wherre to add platyer', event.target.name)
  console.log(' id of player to add to array at position', playerToPush)
  formData.players[event.target.name] = Number(playerToPush)
  console.log(formData.players[event.target.name])
  console.log('all players in array', formData.players )
  }

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
      
    <div className="players">
      <div className="pcard" >
        Goalkeeper
        <button onClick={handleChangeSquad} name="0"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="1">
        Left Back
        <button onClick={handleChangeSquad} name="1"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="2">
        Right Back
        <button onClick={handleChangeSquad} name="2"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="3">
        Center Back
        <button onClick={handleChangeSquad} name="3"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="4">
        Center Back
        <button onClick={handleChangeSquad} name="4"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="5">
        Left Mid
        <button onClick={handleChangeSquad} name="5"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="6">
        Right Mid
        <button onClick={handleChangeSquad} name="6"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="7">
        Center Mid
        <button onClick={handleChangeSquad} name="7"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="8">
        Center Mid
        <button onClick={handleChangeSquad} name="8"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="9">
        Forward
        <button onClick={handleChangeSquad} name="9"> +</button>
        <button> -</button>
      </div>
      <div className="pcard" name="10">
        Forward
        <button onClick={handleChangeSquad} name="10"> +</button>
        <button> -</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default CreateATeam
