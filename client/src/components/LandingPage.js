import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {






  return (
    <div className="  image-landing is-large">
      <div className="hero  hero-image">
        <div className="form">
          <Link to={'/login'}>
            <button className="button is-outlined">Login</button>
          </Link>
          <Link to={'/register'}>
            <button className="button is-outlined">Register</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default LandingPage
