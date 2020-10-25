import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import AdminPanelLayOut from './AdminPanelLayout';

const SecuredAdminPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    
    useEffect(()=>{
        if(loggedInUser.access !== 'admin'){
            history.replace('/')
        }
    },[])

    return (
        <div>
            {
                loggedInUser.access === 'admin' 
                &&
                <AdminPanelLayOut/> 
            }
        </div>
    );
};

export default SecuredAdminPage;