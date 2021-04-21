/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
// import { Link } from 'react-router-dom'

const LandingPage = () => {



  return (
    <div className="landing-page">
    <h1>FUT TEAM BUILDER</h1>
    <div className="landing">
      {/* <Link to={'/login'}> */}
      <a href="/login" class="animated-button1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            Login
      </a>      
      {/* </Link> */}

      {/* <Link to={'/register'}> */}
      <a href="/register" class="animated-button1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            Register
      </a> 
    </div>
    </div>
    

  )
}

export default LandingPage
