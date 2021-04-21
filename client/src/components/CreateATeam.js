import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import axios from 'axios'
// import PlayerCard from './PlayerCard'
// import { Link } from 'react-router-dom'
// import { getPayloadFromToken } from '../helpers/auth'
import Slider from 'react-slick'
import { sliderSettings } from '../components/CreateATeam/SliderSettings'
const CreateATeam = () => {
  // const userId = getPayloadFromToken().sub

  const [formData, setFormData] = useState({
    team_name: '',
    abbreviation: '',
    team_logo: '',
    formation: '',
    players: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
      console.log('RESPONSE', response)
    } catch (err) {
      console.log(err)
      window.alert('Not added enough players')
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
  const [search, setSearch] = useState(null)
  const searchSpace = event => {
    const keyword = event.target.value
    setSearch(keyword)
  }

  // add players to team
  let playerToPush
  let playerToDisplay
  const handleChangeTeam = event => {
    playerToPush = event.target.value
    playerToDisplay = event.target.name
  }

  //add players to card
  const [playersToDisplayPhoto, setPlayersToDisplayPhoto] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  const handleAddToSquad = event => {
    const newPlayersArray = [...playersToDisplayPhoto]
    //add player to data 
    formData.players[event.target.name] = Number(playerToPush)
    console.log('all players in array', formData.players)


    //add picture to squad 
    if (playersToDisplayPhoto.includes(allPlayers[playerToDisplay])) {
      window.alert('Already have that player ')
    } else {
      newPlayersArray[event.target.name] = allPlayers[playerToDisplay]
      setPlayersToDisplayPhoto(newPlayersArray)
      console.log(playerToPush)
    }

  }

  //delete players from positions 
  const handleDeleteFromSquad = event => {
    //delete player from array to send to database 
    const formDataPlayerToDelete = [...formData.players]
    formDataPlayerToDelete[event.target.name] = event.target.name
    formData.players[event.target.name] = 1

    //delete player from picture 
    const playerToDelete = [...playersToDisplayPhoto]
    playerToDelete[event.target.name] = event.target.name
    setPlayersToDisplayPhoto(playerToDelete)
  }

  return (
    <div className="create-page">
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

      <div>
        <input type="text" placeholder="Enter item to be searched" onChange={searchSpace} />
        {allPlayers.name}
      </div>

      <div className="field">
        <div className="columns main full-page ">
          <div className="column red"> 1</div>
          <div className="column red ">2 </div>
          <div className="column red "> 3</div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="9">
            Forward
        <img src={playersToDisplayPhoto[9].photo} alt="" />
            <button onClick={handleAddToSquad} name="9"> +</button>
            <button onClick={handleDeleteFromSquad} name="9"> -</button>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="10">
            Forward
        <img src={playersToDisplayPhoto[10].photo} alt="" />
            <button onClick={handleAddToSquad} name="10"> +</button>
            <button onClick={handleDeleteFromSquad} name="10"> -</button>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
        </div>
        <div className="columns main full-page ">
          <div className="column red"> 1</div>
          <div className="column red ">2 </div>
          <div className="column red "> <div className="pcard" name="5">
            Left Mid
        <img src={playersToDisplayPhoto[5].photo} alt="" />
            <button onClick={handleAddToSquad} name="5"> +</button>
            <button onClick={handleDeleteFromSquad} name="5"> -</button>
          </div></div>
          <div className="column red ">4 </div>
          <div className="column red ">          <div className="pcard" name="7">
            Center Mid
        <img src={playersToDisplayPhoto[7].photo} alt="" />
            <button onClick={handleAddToSquad} name="7"> +</button>
            <button onClick={handleDeleteFromSquad} name="7"> -</button>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="8">
            Center Mid
        <img src={playersToDisplayPhoto[8].photo} alt="" />
            <button onClick={handleAddToSquad} name="8"> +</button>
            <button onClick={handleDeleteFromSquad} name="8"> -</button>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="6">
            Right Mid
        <img src={playersToDisplayPhoto[6].photo} alt="" />
            <button onClick={handleAddToSquad} name="6"> +</button>
            <button onClick={handleDeleteFromSquad} name="6"> -</button>
          </div> </div>
          <div className="column red "> </div>
          <div className="column red ">4 </div>
        </div>
        <div className="columns main full-page ">
          <div className="column red"> 1</div>
          <div className="column red ">2 </div>

          <div className="column red ">
            <div className="pcard" name="1">
              Left Back
        <img src={playersToDisplayPhoto[1].photo} alt="" />
              <button onClick={handleAddToSquad} name="1"> +</button>
              <button onClick={handleDeleteFromSquad} name="1"> -</button>
            </div> </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="2">
            Right Back
        <img src={playersToDisplayPhoto[2].photo} alt="" />
            <button onClick={handleAddToSquad} name="2"> +</button>
            <button onClick={handleDeleteFromSquad} name="2"> -</button>
          </div></div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="3">
            Center Back
        <img src={playersToDisplayPhoto[3].photo} alt="" />
            <button onClick={handleAddToSquad} name="3"> +</button>
            <button onClick={handleDeleteFromSquad} name="3"> -</button>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="4">
            Center Back
        <img src={playersToDisplayPhoto[4].photo} alt="" />
            <button onClick={handleAddToSquad} name="4"> +</button>
            <button onClick={handleDeleteFromSquad} name="4"> -</button>
          </div></div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
        </div>
        <div className="columns main full-page ">
          <div className="column red"> 1</div>
          <div className="column red ">2 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" >
            Goalkeeper
        <img src={playersToDisplayPhoto[0].photo} alt="" />
            <button onClick={handleAddToSquad} name="0"> +</button>
            <button onClick={handleDeleteFromSquad} name="0"> -</button>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
        </div>
      </div>
      <div className="everything">
        <div className="container ">
          <Slider {...sliderSettings} className="slider ">
            {allPlayers.filter((data) => (search === null || search === '') ? data : (data.nationality.toLowerCase().includes(search.toLowerCase()) || data.first_name.toLowerCase().includes(search.toLowerCase()) || data.last_name.toLowerCase().includes(search.toLowerCase()) || data.team_name.toLowerCase().includes(search.toLowerCase()) || data.position.toLowerCase().includes(search.toLowerCase()))
            ).map((data) => (
              <div key={data.id} className="card-content item">
                <button className="button" value={data.id} onClick={handleChangeTeam} name={allPlayers.indexOf(data)} >
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
          </Slider>
          {/* <div className="container columns ">
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
          <div className="item column"> 1 </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default CreateATeam
