import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'


const Register = () => {


    const [formData, setFormData] = useState({
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      gamertag: '',
      coins: '',
      wins: '',
      losses: ''
    })


    const history = useHistory()


    const handleChange = event => {
      const newFormData = { ...formData, [event.target.name]: event.target.value }
      setFormData(newFormData)
    }

    const handleSubmit = async event => {
      try {
        event.preventDefault()
        await axios.post('api/auth/register/', formData)
        // const response = await axios.post('api/auth/login/', {
        // email: formData.email, password: formData.password })
        // window.localStorage.setItem('token', response.data.token)
        // console.log(response.data.token)
        history.push('/home')
      } catch (err) {
        window.alert(err)
      }
    }








  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
        </p>
      </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="name" placeholder="First Name" name="first_name" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="name" placeholder="Last Name" name="last_name" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" name="password" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="name" placeholder="Gamertag" name="gamertag" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="coins" placeholder="Coins" name="coins" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="wins" placeholder="Wins" name="wins" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="losses" placeholder="Losses" name="losses" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
        </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Register
              </button>
            </p>
          </div>
    </form>
  )
}

export default Register
