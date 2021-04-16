import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage';




function App() {
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter> 
  )
}

export default App;
