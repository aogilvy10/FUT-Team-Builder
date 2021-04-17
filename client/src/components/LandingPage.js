import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {






  return (
    <>
    <Link to={'/login'}>
       <button class="button is-outlined">Login</button>
    </Link>
    <Link to={'/register'}>
       <button class="button is-outlined">Register</button>
    </Link>
    </>

  )
}

export default LandingPage
