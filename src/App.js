import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import {Route, Switch} from "react-router-dom";
import Header from "./component/header/header.component";
import signinAndsignup from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth , createUserProfileDocument} from "./firebase/firebase.utils"
import React from 'react';


class App extends React.Component {
  constructor(){

    super();
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async user => {
        createUserProfileDocument(user);
        // this.setState({currentUser: user});

        // console.log(user);
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
  
  render(){

  
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route exact path="/shop" component = {ShopPage} />
      <Route path="/signin" component = {signinAndsignup} />
      </Switch>
    </div>
    
  );
  }
}

export default App;
