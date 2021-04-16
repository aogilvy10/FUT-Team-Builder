import React , { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }


  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/login', formData)
      window.localStorage.setItem('token', response.data.token)
      history.push('/teamfeed')
    } catch (err) {
      console.log(err)
    }
  }


  
  return (
    
    <form onSubmit={handleSubmit}>
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email" name="email" onChange={handleChange} />
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
          <input className="input" type="password" placeholder="Password" name="password" onChange={handleChange} />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
        </p>
      </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">
          Login
            </button>
          </p>
        </div>
        </form>
    
  )
}

export default Login
