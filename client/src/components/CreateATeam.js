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
    team_logo: 'team.jpg',
    formation: 4,
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
      window.alert(err)
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

  const [handleToggle, setHandleToggle] = useState(null)
  //modal to add a team. 
  const handleModal = event => {
    if (handleToggle === true) {
      setHandleToggle(null)
    } else {
      console.log(event)
      console.log(handleToggle, setHandleToggle)
      setHandleToggle(true)

    }

  }

  return (
    <div className="create-page">
      <div className="columns">
        <div className="column "> </div>
        <div className="column align"> <h1 className="is-centered1 ">CREATE A TEAM</h1></div>
        <div className="column"> </div>
      </div>
      
      <div className="field">
        <div className="columns main full-page ">
          <div className="column red"> 1</div>
          <div className="column red ">2 </div>
          <div className="column red "> 3</div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="9">
          <div class="wrapper">
      <div class="fut-player-card">
        <div class="player-card-top">
          <div class="player-master-info">
            <div class="player-rating"><span>97</span></div>
            <div class="player-position"><span>RW</span></div>
            <div class="player-nation"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/></div>
            <div class="player-club"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/></div>
          </div>
          <div class="player-picture"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
            <div class="player-extra"><span>4*SM</span><span>4*WF</span></div>
          </div>
        </div>
        <div class="player-card-bottom">
          <div class="player-info">
            <div class="player-name"><span>MESSI</span></div>
            <div class="player-features">
              <div class="player-features-col"><span>
                  <div class="player-feature-value">97</div>
                  <div class="player-feature-title">PAC</div></span><span>
                  <div class="player-feature-value">95</div>
                  <div class="player-feature-title">SHO</div></span><span>
                  <div class="player-feature-value">94</div>
                  <div class="player-feature-title">PAS</div></span></div>
              <div class="player-features-col"><span>
                  <div class="player-feature-value">99</div>
                  <div class="player-feature-title">DRI</div></span><span>
                  <div class="player-feature-value">35</div>
                  <div class="player-feature-title">DEF</div></span><span>
                  <div class="player-feature-value">68</div>
                  <div class="player-feature-title">PHY</div></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          <div className="column red ">      <div>
            <input className="align" type="text" placeholder="Enter item to be searched" onChange={searchSpace} />
            {allPlayers.name}
            <button onClick={handleModal} className="button">Add Name/FC </button>
            {handleToggle && <div name="modal" className="modal is-active">
              <div className="modal-background"></div>
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <div className="control">
                    <input className="input" type="text" placeholder="Team Name" name="team_name" onChange={handleChange} />
                  </div>
                  <div className="control">
                    <input className="input" type="text" placeholder="Abbreviation" name="abbreviation" onChange={handleChange} />
                  </div>
                  <div className="control">
                    <input className="input hidden" type="text" placeholder="Team Logo" name="team_logo" onChange={handleChange} />
                  </div>
                  <div className="control">
                    <div className="select hidden">
                      <select name="formation" onChange={handleChange}>
                        <option hidden disabled selected>Select Formation</option>
                        <option value="4">4-4-2</option>
                        <option value="2">4-3-3</option>
                        <option value="3">4-1-2-1-2</option>
                      </select>
                    </div>
                  </div>
                  <div className="control">
                    <input className="input hidden" type="text" placeholder="players" name="players" onChange={handleChange} />
                  </div>
                  {/* <Link to={'/userprofile'}> */}
                  <div className="control">+-
          <button className="button is-primary">Create Team</button>
                  </div>
                  {/* </Link> */}
                </form>
              </div>
              <button onClick={handleModal} className="modal-close is-large" aria-label="close"></button>
            </div>}
          </div> </div>
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
