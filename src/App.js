import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import CheckoutPage from './pages/checkout/checkout.component';

import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./component/header/header.component";
import SigninAndSignup from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth , createUserProfileDocument, addCollectionandDocuments} from "./firebase/firebase.utils"
import React from 'react';

import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user-actions";

import {createStructuredSelector} from "reselect"
import {selectCurrentUser} from "./redux/user/user-selectors"

import { selectCollectionForPreview } from "./redux/shop/shop-selector"

class App extends React.Component {

  unsubscribeFromAuth = null;

    componentDidMount() {
      const {setCurrentUser, CollectionsArray} = this.props 
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
        
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
              })
          });
          
        }

        if (!userAuth){
          setCurrentUser(userAuth)

        }
        addCollectionandDocuments("collections", CollectionsArray)
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
  
  render(){

  
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component = {Homepage} />
      <Route path="/shop" component = {ShopPage} />
      <Route exact path="/checkout" component = {CheckoutPage} />
      <Route exact path="/signin" 
        render={
          () => this.props.currentUser ? ( <Redirect to="/" /> )
          : ( <SigninAndSignup /> )
        }
      />
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  CollectionsArray: selectCollectionForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
