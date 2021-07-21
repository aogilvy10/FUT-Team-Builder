import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


const Register = () => {


  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
    gamertag: '',
    coins: '',
    wins: '',
    losses: ''
  })

  const [errorData, setErrorData] = useState({
    email: '',
    username: '',
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
      const req = await axios.post('api/auth/register/', formData)
      console.log("LOOK HERE: ", req)
      const response = await axios.post('api/auth/login/', {
        email: formData.email, password: formData.password
      })
      window.localStorage.setItem('token', response.data.token)
      history.push('/home')
    } catch (err) {
      // alert(err.response.data.coins)
      console.log('HELLO', err.response.data)
      let data = {}
      for (let key in err.response.data) {
        data = { ...data, [key]:err.response.data[key][0]}
        // console.log(err.response.data[key][0])
        // alert(data)
        // console.log('this', data)
      }
      setErrorData(data)
      console.log('fuck sake', data)
    }
  }



  return (
    
    <div className="register-page">
       <Link to="/">
          <h3 className="home-button">BACK</h3>
        </Link>
      <div className="columns">
      <div className="column is-one-quarter"></div>
      <h1>REGISTER</h1>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column top">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" name="email" onChange={handleChange} />
              <span className="error">{errorData.email}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="username" placeholder="Username" name="username" onChange={handleChange} />
              <span className="error">{errorData.username}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="name" placeholder="First Name" name="first_name" onChange={handleChange} />
              <span className="error">{errorData.first_name}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="name" placeholder="Last Name" name="last_name" onChange={handleChange} />
              <span className="error">{errorData.last_name}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" name="password" onChange={handleChange} />
              <span className="error">{errorData.password}</span>
              {/* <p class="help is-success">This password must be longer than 5 characters using</p> */}
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={handleChange} />
              <span className="error">{errorData.password_confirmation}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="name" placeholder="Gamertag" name="gamertag" onChange={handleChange} />
              <span className="error">{errorData.gamertag}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="coins" placeholder="Coins" name="coins" onChange={handleChange} />
              <span className="error">{errorData.coins}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="wins" placeholder="Wins" name="wins" onChange={handleChange} />
              <span className="error">{errorData.wins}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control has-icons-left">
              <input className="input" type="losses" placeholder="Losses" name="losses" onChange={handleChange} />
              <span className="error">{errorData.losses}</span>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-fifths"></div>
          <div className="field column">
            <p className="control">
              <button type="submit" className="button is-success">
                Register
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
