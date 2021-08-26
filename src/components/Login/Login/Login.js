import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';


import './Login.css';
import togather from '../../../images/togather.png';

import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then((result) => {
            
            var user = result.user;
            console.log(user);
            
            }).catch((error) => {
            
            var errorMessage = error.message;
            console.log(errorMessage);
            
        });
    }

    

    return (
        <div className="container d-flex">
            <div className="col-md-5 form-margin">
                <h2 style={{color: '#1CC7C1', textAlign: 'center'}}>Login</h2>
                <div className="form-group">
                    <label for="">Username</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="">Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <button onClick={handleGoogleSignIn} type="submit" className="btn button">Sign In</button>
                
            </div>
            <div className="col-md-7">
                <img src={togather} alt=""/>
            </div>
        </div>
    );
};

export default Login;