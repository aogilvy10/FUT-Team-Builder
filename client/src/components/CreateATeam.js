import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
// import PlayerCard from './PlayerCard'
import { Link } from 'react-router-dom'
// import { getPayloadFromToken } from '../helpers/auth'
import Slider from 'react-slick'
import { sliderSettings } from './createateam/SliderSettings'
import EPLLogo from '../assets/kisspng-201718-premier-league-201617-premier-league-football-fan-5b3594f33be812.1616807615302381952454.jpg'




const CreateATeam = () => {
  // const userId = getPayloadFromToken().sub
  const [formData, setFormData] = useState({
    team_name: '',
    abbreviation: '',
    team_logo: 'team.jpg',
    formation: 4,
    players: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  })
  const history = useHistory()
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
      history.push('/teamfeed')
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
  const [playersToDisplayPhoto, setPlayersToDisplayPhoto] = useState([{ photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}])
  const handleAddToSquad = event => {
    const newPlayersArray = [...playersToDisplayPhoto]
    //add player to data
    console.log(playersToDisplayPhoto)
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
    const stockPhotoToShow = [...playersToDisplayPhoto]
    stockPhotoToShow[event.target.name] = { photo : "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png" }
    setPlayersToDisplayPhoto(stockPhotoToShow)
    console.log(playersToDisplayPhoto)
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
      <Link to="/home">
        <h3 className="home-button">HOME</h3>
      </Link>
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
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="9" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="9" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[9].photo} alt="Player" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[9].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red ">4 </div>
          <div className="column red ">4 </div>
          <div className="column red "><div className="pcard" name="10">
            <div className="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="10" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="10" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch">  <img src={playersToDisplayPhoto[10].photo} alt=""  className="img img-pitch" /> 
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[10].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red "></div>
          <div className="column red "></div>
          <div className="column red "> </div>
          <div className="column red "> </div>
        </div>
        <div className="columns main full-page ">
          <div className="column red"> </div>
          <div className="column red "> </div>
          <div className="column red "> <div className="pcard" name="5">
            <div className={"wrapper wrapper-pitch"}>
              <div class="fut-player-card fut-player-card-pitch">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="5" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="5" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"> <img src={playersToDisplayPhoto[5].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[5].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          <div className="column red "> </div>
          <div className="column red ">          <div className="pcard" name="7">
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="7" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="7" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[7].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[7].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red "></div>
          <div className="column red "> </div>
          <div className="column red "><div className="pcard" name="8">
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="8" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="8" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[8].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[8].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red "> </div>
          <div className="column red "><div className="pcard" name="6">
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="6" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="6" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[6].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[6].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red "> </div>
          <div className="column red "> </div>
        </div>
        <div className="columns main full-page ">
          <div className="column red"> </div>
          <div className="column red "> </div>
          <div className="column red ">
            <div className="pcard" name="1">
              L<div class="wrapper wrapper-pitch">
                <div class="fut-player-card fut-player-card-pitch ">
                  <div class="player-card-top-pitch">
                    <div class="player-master-info">
                      <div class="player-rating"><span> <button onClick={handleAddToSquad} name="1" className="button-pitch button"> +</button></span> </div>
                      <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="1" className="button-pitch button"> -</button></span> </div>
                      <div class="player-position"><span>PL</span></div>
                      <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                    </div>
                    <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[1].photo} alt="" draggable="false" className="img img-pitch" />
                    </div>
                  </div>
                  <div class="player-card-bottom">
                    <div class="player-info-pitch">
                      <div class="player-name"><span>{playersToDisplayPhoto[1].last_name}</span></div>
                      <div class="player-features">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> </div>
          <div className="column red "></div>
          <div className="column red "><div className="pcard" name="2">
          <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="2" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="2" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[2].photo} alt="Player" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[2].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          <div className="column red "> </div>
          <div className="column red "><div className="pcard" name="3">
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="3" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="3" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[3].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[3].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red "></div>
          <div className="column red "><div className="pcard" name="4">
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="4" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="4" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[4].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[4].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
          <div className="column red "> </div>
          <div className="column red "> </div>
        </div>
        <div className="columns main full-page ">
          <div className="column red"> </div>
          <div className="column red "> </div>
          <div className="column red "> </div>
          <div className="column red "> </div>
          <div className="column red "></div>
          <div className="column red "><div className="pcard" >
            <div class="wrapper wrapper-pitch">
              <div class="fut-player-card fut-player-card-pitch ">
                <div class="player-card-top-pitch">
                  <div class="player-master-info">
                    <div class="player-rating"><span> <button onClick={handleAddToSquad} name="0" className="button-pitch button"> +</button></span> </div>
                    <div class="player-rating"><span><button onClick={handleDeleteFromSquad} name="0" className="button-pitch button"> -</button></span> </div>
                    <div class="player-position"><span>PL</span></div>
                    <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                  </div>
                  <div class="player-picture player-picture-pitch"><img src={playersToDisplayPhoto[0].photo} alt="" draggable="false" className="img img-pitch" />
                  </div>
                </div>
                <div class="player-card-bottom">
                  <div class="player-info-pitch">
                    <div class="player-name"><span>{playersToDisplayPhoto[0].last_name}</span></div>
                    <div class="player-features">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </div>
          <div className="column red "> </div>
          <div className="column red "></div>
          <div className="column red "></div>
          <div className="column red "></div>
          <div className="column red ">      <div>
            <input className="align align-left" type="text" placeholder="Enter item to be searched" onChange={searchSpace} />
            {allPlayers.name}
            <button onClick={handleModal} className="add-button">Add Name/FC </button>
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
        <div className="container">
          <Slider {...sliderSettings} className="slider ">
            {allPlayers.filter((data) => (search === null || search === '') ? data : (data.nationality.toLowerCase().includes(search.toLowerCase()) || data.first_name.toLowerCase().includes(search.toLowerCase()) || data.last_name.toLowerCase().includes(search.toLowerCase()) || data.team_name.toLowerCase().includes(search.toLowerCase()) || data.position.toLowerCase().includes(search.toLowerCase()))
            ).map((data) => (
              <div class="wrapper" >
                <div class="fut-player-card item">
                  <div class="player-card-top">
                    <div class="player-master-info">
                      <div class="player-rating"><span><button value={data.id} onClick={handleChangeTeam} name={allPlayers.indexOf(data)} className="button-player-card" > +</button>
                      </span></div>
                      <div class="player-position"><span>PL</span></div>
                      <div class="player-club"><img src={EPLLogo} alt="Barcelona" draggable="false" /></div>
                    </div>
                    <div class="player-picture"><img src={data.photo} alt="Messi" draggable="false" />
                      <div class="player-extra"><span>4*SM</span><span>4*WF</span></div>
                    </div>
                  </div>
                  <div class="player-card-bottom">
                    <div class="player-info">
                      <div class="player-name"><span>{data.last_name}</span></div>
                      <div class="player-features">
                        <div class="player-features-col"><span>
                          <div class="player-feature-value">POS</div>
                          <div class="player-feature-title"></div></span><span>
                            <div class="player-feature-value">TEA</div>
                            <div class="player-feature-title"></div></span><span>
                            <div class="player-feature-value">NAT</div>
                            <div class="player-feature-title"></div></span></div>
                        <div class="player-features-col"><span>
                          <div class="player-feature-value"></div>
                          <div class="player-feature-title"></div>{data.position}</span><span>
                            <div class="player-feature-value">
                            </div>
                            <div class="player-feature-title"></div>{data.team_name}</span><span>
                            <div class="player-feature-value"></div>
                            <div class="player-feature-title">{data.nationality}</div></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default CreateATeam