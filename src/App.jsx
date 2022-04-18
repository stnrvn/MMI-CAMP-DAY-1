import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Cars
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/cars'>
          <Cars />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;