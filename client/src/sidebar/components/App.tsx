import { Sidebar } from './Sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Guest } from '../pages/Guest'

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/guest">
            <Guest />
          </Route>
          <Route path="/">
            <Sidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
