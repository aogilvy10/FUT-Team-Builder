import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {






  return (
    <div className="image-landing"> 
    <Link to={'/login'}>
      <button class="button image-landing is-outlined">Login</button>
    </Link>
    <Link to={'/register'}>
       <button class="button is-outlined">Register</button>
    </Link>
    </div>

  )
}

export default LandingPage
