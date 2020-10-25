import React, { useState } from 'react';

const Review = (props) => {

    const [review, setReview] = useState({
        name: '',
        company: '',
        description: '',
        imgUrl: props.image
    })

    const handleOnBlur = (e) => {
        const eName = e.target.name;
        const eValue = e.target.value;
        const newObject = { ...review }

        if (eName === 'name') {
            newObject.name = eValue;
        } else if (eName === 'company') {
            newObject.company = eValue;
        } else if (eName === 'description') {
            newObject.description = eValue;
        }

        newObject.imgUrl = props.image;
        setReview(newObject);
    }


    const handleFormSubmit = (e) => {
        console.log(review)
        fetch('https://intense-lowlands-13207.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert("Thanks For Your Review!")
                } else {
                    window.alert("Something went wrong. Please try again!")
                }

            })
        e.preventDefault();
    }

    return (
        <div className="p-4 my-3" style={{ backgroundColor: '#f4f7fc' }}>
            <p className="h4  my-4">Add a review</p>
            <div className="col-md-6 col-sm-12">
                <form onSubmit={handleFormSubmit}>
                    <div className="">
                        <input onBlur={handleOnBlur} name="name" type="text" placeholder="Your Name" className="form-control" required />
                        <br />
                        <input onBlur={handleOnBlur} name="company" type="text" placeholder="Company’s name, Designation" className="form-control" required />
                        <br />
                        <textarea onBlur={handleOnBlur} name="description" type="text" placeholder="Description" className="form-control" required />
                        <br />
                        <div className="text-center ml-0">
                            <button type="submit" className="brand-dark-btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;