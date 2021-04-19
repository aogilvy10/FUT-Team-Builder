import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {






  return (
    <div className="hero image-landing is-large">
      <Link to={'/login'}>
        <button className="button is-outlined">Login</button>
      </Link>
      <Link to={'/register'}>
        <button className="button is-outlined">Register</button>
      </Link>
    </div>

  )
}

export default LandingPage
