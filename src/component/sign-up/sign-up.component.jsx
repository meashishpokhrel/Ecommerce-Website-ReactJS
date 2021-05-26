import React from React;

import FormInput from "../form-input/form-input.component"

import customButton from  "../custom-button/custom-button.component" 

import {auth, CreateUserProfileDocument} from "../../firebase/firebase.utils"
import "./sign-up.styles.scss"

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }  
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className="title">I Do not have account </h2>
                <span>Sign up With you Email and Password</span>
                <form className="sign-up-form">

                </form>
            </div>
        )
    }
}
