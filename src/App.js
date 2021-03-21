import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import {Route, Switch} from "react-router-dom";
import Header from "./component/header/header.component";
import signinAndsignup from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"


function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/shop" component = {ShopPage} />
      <Route path="/signin" component = {signinAndsignup} />
      </Switch>
    </div>
    
  );
}

export default App;
