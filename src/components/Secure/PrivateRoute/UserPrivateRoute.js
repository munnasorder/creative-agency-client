import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const UserPrivateRoute = ({ children, ...rest }) => {
    const [loggedInAdmin, setLoggedInAdmin] = useContext(UserContext);

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInAdmin.email
                        ? (children)
                        :
                        (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default UserPrivateRoute;