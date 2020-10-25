import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import serviceList from'../../images/icons/serviceList.png';
import plus from '../../images/icons/plus.png';
import makeAdmin from '../../images/icons/addAdmin.png';
import { UserContext } from '../../App';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddService from './AddService/AddService';
import AllOrderList from './AllOrderList/AllOrderList';


const AdminPanelLayout = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let currentLocation = useLocation()

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="70" alt="" />
                </Link>

            </nav>

            <div className="container-fluid">
                <div className="row mx-2">
                    <div className="col-md-2 pt-3">
                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">
                                        <img src={serviceList} alt="" height="18"/> &nbsp;
                                        Service List<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/addService">
                                    <img src={plus} alt="" height="18"/> &nbsp;
                                        Add Service
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin/makeAdmin">
                                      <img src={makeAdmin} alt="" height="18"/> &nbsp;
                                        Make Admin
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-10">
                        {
                            currentLocation.pathname === '/admin'
                            &&
                            <AllOrderList/>
                        }
                        {
                            currentLocation.pathname === '/admin/addService'
                            &&
                            <AddService/>
                        }
                        {
                            currentLocation.pathname === '/admin/makeAdmin'
                            &&
                            <MakeAdmin/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanelLayout;