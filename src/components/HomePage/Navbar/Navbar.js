import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light pt-2 font-weight-bold">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="50" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-3">
                        <li className="nav-item ">
                            <Link className="nav-link nav-btn" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                        {
                            loggedInUser.email
                                ?
                                <>
                                    <li className="nav-item d-flex">
                                        <Link className="nav-link " to="/user"> {loggedInUser.displayName} </Link>
                                    </li>
                                    {
                                        loggedInUser.access === 'admin'
                                        &&
                                        <li className="nav-item d-flex">
                                            <Link className="nav-link " to="/admin"> Admin Panel </Link>
                                        </li>
                                    }
                                    <li className="nav-item">
                                        <Link className="nav-link " to="/logout">Log Out</Link>
                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <button className="brand-dark-btn mt-n2">Log In</button>
                                    </Link>
                                </li>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;