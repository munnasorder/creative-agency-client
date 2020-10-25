import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/AppLayOut/LandingPage/LandingPage';
import Login from './components/Secure/Login/Login';
import UserDesign from './components/UserPanel/UserDesign';
import * as firebase from "firebase/app";
import "firebase/auth";
import { initializeFirebaseLogin } from './components/Secure/Login/LoginManager';
import LogOut from './components/Secure/Login/LogOut';
import SecuredForAdminPage from './components/Admin/SecuredAdminPage';
import UserPrivateRoute from './components/Secure/PrivateRoute/UserPrivateRoute';
import ErrorPage from './components/HomePage/NotFound/ErrorPage';

export const UserContext = createContext();

function App() {

    initializeFirebaseLogin()

    const [loggedInUser, setLoggedInUser] = useState({
        isLogIn: false,
        displayName: '',
        photo: '',
        email: ''
    });


    const findUser = (res) => {
        fetch(`https://intense-lowlands-13207.herokuapp.com/checkingUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: res.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.person === 'admin') {
                    res.access = 'admin';
                } else {
                    res.access = 'user'
                }
                setLoggedInUser(res)
            })
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                    profilePhoto: user.photoURL
                }
                if (userInfo.email) {
                    findUser(userInfo)
                }
            } else {
                
            }
        });
    }, [])



    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"> 
                            <LandingPage></LandingPage>
                        </Route>
                        <Route path="/admin">
                            <SecuredForAdminPage></SecuredForAdminPage>
                        </Route>
                        <UserPrivateRoute path="/user/:service_name"> 
                            <UserDesign></UserDesign>
                        </UserPrivateRoute>
                        <UserPrivateRoute path="/user">
                            <UserDesign></UserDesign>
                        </UserPrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/logout"> 
                            <LogOut></LogOut>
                        </Route>
                        <Route path="*">
                            <ErrorPage></ErrorPage>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
}

export default App;
