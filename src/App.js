import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Cars,
  CarsFormAdd,
  CarsFormEdit,
  Home
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/cars/add'>
          <CarsFormAdd />
        </Route>
        <Route path='/cars/edit/:id'>
          <CarsFormEdit />
        </Route>
        <Route path='/cars'>
          <Cars />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;