import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'
import Login from './Auth/Login'
import Register from './Auth/Register'
import TeamFeed from './components/TeamFeed'




function App() {
  
  
  
  
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/teamfeed">
          <TeamFeed />
        </Route>
      </Switch>
    </BrowserRouter> 
  )
}

export default App;
