import React from 'react';
import MiddelHeader from '../../HomePage/MiddelHeader/MiddelHeader';
import OnlineLogo from '../../HomePage/OnlineLogo/OnlineLogo';
import Footer from '../../HomePage/Footer/Footer';
import Navbar from '../../HomePage/Navbar/Navbar';
import ProvidedServices from '../../HomePage/Serivces/ProvidedServices';
import UserReview from '../../HomePage/UserReview/UserReview';
import Works from '../../HomePage/Works/Works';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="font-weight-normal">
            <div className="b-bg">
                <div className="container">
                    <Navbar></Navbar>
                    <MiddelHeader></MiddelHeader>
                </div>
            </div>
            <div className="container">
                <OnlineLogo></OnlineLogo>
                <ProvidedServices></ProvidedServices>
            </div>
            <div className="w-bg">
                <div className="container">
                    <Works></Works>
                </div>
            </div>
            <div className="container my-5">
                    <UserReview></UserReview>
                </div>
            <div className="f-bg">
                <div className="container">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;