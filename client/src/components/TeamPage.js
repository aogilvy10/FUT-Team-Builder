import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"

const TeamPage = () => {
  const [team, setTeam] = useState({})

  const { teamId } = useParams()

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get(`/api/teams/${teamId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(data)
      setTeam(data)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  
  return (
    <div className='team-page'>
      {
        team.players && (
          <div className="create-page">
            <div className="columns background">
              <Link to="/home">
                <h3 className="home-button">HOME</h3>
              </Link>
              <div className="column "> </div>
              <div className="column align"> <h1 className="is-centered1 ">{team.team_name}</h1></div>
              <div className="column"> </div>
            </div>
            <div className="field">
              <div className="columns main full-page ">
                <div className="column red"></div>
                <div className="column red "></div>
                <div className="column red "></div>
                <div className="column red "></div>
                <div className="column red "><div className="pcard" name="9">
                  <div class="wrapper wrapper-pitch">
                    <div class="fut-player-card fut-player-card-pitch ">
                      <div class="player-card-top-pitch">
                        <div class="player-master-info">
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[9].photo} alt="Player" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[9].last_name}</span></div>
                          <div class="player-features">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> </div>
                <div className="column red "></div>
                <div className="column red "></div>
                <div className="column red "><div className="pcard" name="10">
                  <div className="wrapper wrapper-pitch">
                    <div class="fut-player-card fut-player-card-pitch ">
                      <div class="player-card-top-pitch">
                        <div class="player-master-info">
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[10].photo} alt="" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[10].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[5].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[5].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[7].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[7].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[8].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[8].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[6].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[6].last_name}</span></div>
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
                            <div class="player-rating"></div>
                            <div class="player-rating"></div>
                            <div class="player-position"><span>PL</span></div>
                            <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                          </div>
                          <div class="player-picture player-picture-pitch"><img src={team.players[1].photo} alt="" draggable="false" className="img img-pitch" />
                          </div>
                        </div>
                        <div class="player-card-bottom">
                          <div class="player-info-pitch">
                            <div class="player-name"><span>{team.players[1].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[2].photo} alt="Player" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[2].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[3].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[3].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[4].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[4].last_name}</span></div>
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
                          <div class="player-rating"></div>
                          <div class="player-rating"></div>
                          <div class="player-position"><span>PL</span></div>
                          <div class="player-club"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Reddot-small.svg/1200px-Reddot-small.svg.png" alt="Barcelona" draggable="false" /></div>
                        </div>
                        <div class="player-picture player-picture-pitch"><img src={team.players[0].photo} alt="" draggable="false" className="img img-pitch" />
                        </div>
                      </div>
                      <div class="player-card-bottom">
                        <div class="player-info-pitch">
                          <div class="player-name"><span>{team.players[0].last_name}</span></div>
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
                </div> </div>
              </div>
            </div>
            <div className="everything">
              <div className="container">

              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default TeamPage