import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import {Route, Switch, Link} from "react-router-dom";



const HatsPage = (props) => (
  <div>
      <h1> Hats Page </h1>
  </div>
  )



function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route path="/hats" component = {HatsPage} />
      </Switch>
    </div>
    
  );
}

export default App;
