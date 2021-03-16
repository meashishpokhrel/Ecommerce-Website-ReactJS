import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import {Route, Switch, Link} from "react-router-dom";



const HatsPage = (props) => (
  
  <div>
    
    <button onClick = { () => { props.history.push("/hats/list")}}> Next apge</button>
      <h1> Hats Page </h1>
  </div>

)

const Listme = () => (
  <div>
      <h1> This is Listings </h1>
  </div>

)
const id = (props) => (
  <div>
      <h1> This is id turn {props.match.params.id} </h1>
  </div>

)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/hats" component = {HatsPage} />
      <Route exact path="/hats/list" component = {Listme} />
      <Route path="/hats/list/:id" component = {id} />
      </Switch>
    </div>
    
  );
}

export default App;
