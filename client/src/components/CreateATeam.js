import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const CreateATeam = () => {


  const [formData, setFormData] = useState({
    team_name: '',
    abbreviation: '',
    team_logo: '',
    formation: '',
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
      const response = await axios.post('/api/teams/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(response)
      history.push('/teamfeed')
    } catch (err) {
      console.log(err)
    }
  }






  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="control">
          <input class="input" type="text" placeholder="Team Name" name="team_name" onChange={handleChange}/>
        </div>
        <div class="control">
          <input class="input" type="text" placeholder="Abbreviation" name="abbreviation" onChange={handleChange} />
        </div>
        <div class="control">
          <input class="input" type="text" placeholder="Team Logo" name="team_logo" onChange={handleChange} />
        </div>
        <div class="control">
          <div class="select">
            <select name="formation" onChange={handleChange}>
              <option hidden disabled selected>Select Formation</option>
              <option value="4-4-2">4-4-2</option>
              <option value="4-3-3">4-3-3</option>
              <option value="4-1-2-1-2">4-1-2-1-2</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-primary">Create Team</button>
        </div>
      </form>
    </div>
  )
}

export default CreateATeam
