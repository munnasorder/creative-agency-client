import React, { useContext } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png'
import Order from './Order/Order';
import OrderedList from './OrderedList/OrderedList';
import Review from './Review/Review';
import cartIcon from '../../images/icons/cart.png';
import serviceListIcon from '../../images/icons/serviceList.png';
import reviewIcon from '../../images/icons/review.png';
const UserDesign = () => {
    const { service_name } = useParams();
    const currentLocation = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="70" alt="" />
                </Link>
                <div className="ml-auto">
                    <p> <img src={loggedInUser.profilePhoto} height="25" style={{ borderRadius: '50%' }} alt="" /> {loggedInUser.displayName}</p>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row mx-2">
                    <div className="col-md-3 col-sm-6 pt-3">
                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user">
                                        <img src={cartIcon} alt="" height="18" />   &nbsp;
                                        Order<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/orderedList">
                                        <img src={serviceListIcon} alt="" height="18" />   &nbsp;
                                        Service List
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user/review">
                                        <img src={reviewIcon} alt="" height="18" />   &nbsp;
                                        Review
                                        </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-6">
                        {
                            currentLocation.pathname === '/user/orderedList'
                                ?
                                <OrderedList email={loggedInUser.email} />
                                :
                                currentLocation.pathname === '/user/review'
                                    ?
                                    <Review image={loggedInUser.profilePhoto} />
                                    :
                                    ((service_name !== 'orderedList' || service_name !== 'review')
                                        &&
                                        (currentLocation.pathname === '/user/' + service_name
                                        || currentLocation.pathname === '/user')
                                    )
                                    &&
                                    <Order service_name={service_name} user={loggedInUser} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDesign;