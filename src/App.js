import './App.css';
import {Route, Switch } from "react-router";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Switch>
          <Route path='/' exact>
              <HomePage/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
