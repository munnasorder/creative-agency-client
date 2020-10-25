import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { googleSignOut } from './LoginManager';

const LogOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    useEffect(()=>{
        googleSignOut()
        .then(res=>{
            setLoggedInUser(res);
            history.push('/')
        })
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default LogOut;