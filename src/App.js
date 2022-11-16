import {Route, Switch} from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Navbar from './components/Navbar'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
      <Route />
    </Switch>
  </>
)

export default App
