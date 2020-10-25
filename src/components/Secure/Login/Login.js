import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/logos/googleLogo.png';
import { UserContext } from '../../../App';
import { googleSignIn, initializeFirebaseLogin } from './LoginManager';
import './LoginStyle.css';

const Login = () => {
    initializeFirebaseLogin();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    if(loggedInUser.email !== ''){
        history.replace(from)
    }

    const whoAreYou=(res)=>{
        fetch(`https://intense-lowlands-13207.herokuapp.com/checkingUser` , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: res.email})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.person === 'admin') {
                    res.access = 'admin';
                    window.alert("Welcome Mr. Admin")
                }else{
                    res.access = 'user'
                }
                setLoggedInUser(res)
            })
    }

    const handleResponse = (res, redirect) => {
            whoAreYou(res);
            redirect && history.replace(from);
    }

    const googleSignInHandler = () => {
        googleSignIn()
            .then(res => {
                res && handleResponse(res, true);
            })
    }
    
    return (
    
        <div>
        <div className='mt-5' style={{width:'150px', margin:'auto'}}>
            <Link to='/'><img  style={{height:'50px'}} src={logo} alt=""/></Link>
        </div>
        <div className='mt-5 login-form-container' >
            <h3 className='text-center' style={{fontSize:'24px', fontWeight:'bold'}}>
                Login with
            </h3>
            <div onClick={googleSignInHandler} className=' d-flex google-flex'>
                <img style={{width:'30px',height:'30px'}} src={google} alt=""/>
                <p className='ml-5'>Continue with Google</p>
            </div>
        </div>
    </div>
    );
};

export default Login;