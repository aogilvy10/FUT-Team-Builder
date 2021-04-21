
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'
import Login from './Auth/Login'
import Register from './Auth/Register'
import TeamFeed from './components/TeamFeed'
import UserProfile from './components/UserProfile'
import CreateATeam from './components/CreateATeam'
import PitchTest from './components/CreateATeam/PitchTest'



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
        <Route exact path="/userprofile">
          <UserProfile /> 
        </Route>
        <Route exact path="/teams/new"> 
          <CreateATeam />
          </Route>
        <Route exact path="/pitch"> 
          <PitchTest />
        </Route>
      </Switch>
    </BrowserRouter> 
  )
}

export default App
