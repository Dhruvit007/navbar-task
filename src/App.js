import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Jobs from './components/Jobs'
import ProtectedRoute from './components/ProtectedRoute'
import DetailedJobItem from './components/DetailedJobItem'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={DetailedJobItem} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
