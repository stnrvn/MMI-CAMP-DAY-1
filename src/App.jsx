import {
  Login,
  Register,
  Home
} from './pages'
import { Switch, Route } from "react-router-dom";

function App() {
  return(
    <>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
      </Switch>
    </>
  )
}

export default App;
