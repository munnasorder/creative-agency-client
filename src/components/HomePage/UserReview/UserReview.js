import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch(`https://intense-lowlands-13207.herokuapp.com/usersReview`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.slice(0,6))
            })
    },[])
    return (
        <div className="gap">
            <div className="my-5">
                <h3 className="text-center"><strong>Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></strong></h3>
            </div>
            <div className="card-columns">
                {
                    reviews.length > 0
                        ?
                        reviews.map((each, index) => <UserReviewCard key={index} data={each} />)
                        :
                        <h4 className="text-center"> Please Wait... </h4>
                }
            </div>
        </div>
    );
};

export default UserReview;