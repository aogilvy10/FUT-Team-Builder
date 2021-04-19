import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {






  return (
    <div className="image-landing is-large image-response">
        <div className="container hero-image columns">
          <div className="column is-four-fifths"> </div>
          <div className="columns is-vcentered"> 
          <div className="column is-flex-mobile"></div>
          <div className="form columns column-start is-vcentered ">
            <div className="column loading-text loading-text-words loading"> 
            <Link to={'/login'}>
              <button className="button is-centered">Login</button>
            </Link>
            </div>
            <div className="column"> 
            <Link to={'/register'}>
              <button className="button is-outlined is-purple">Register</button>
            </Link>
            </div>
          </div>
          </div>
        </div>
    </div>

  )
}

export default LandingPage
