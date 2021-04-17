import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UserTeams = () => {

  // const [teams, setTeams] = useState('')

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get(`/api/teams/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // setTeams(data)
      console.log(data)
    }
    getData()
  },[id])

  // console.log('TEAMS', teams)
  
  

  return (
    <div>
      <h1></h1>
    </div>
  )
}







export default UserTeams
