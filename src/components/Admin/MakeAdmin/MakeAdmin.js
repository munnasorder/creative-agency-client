import React, { useState } from 'react';
import { useEffect } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState({ email: '' })
    const [emailList, setEmailList] = useState([])

    useEffect(() => {
        fetch(`https://intense-lowlands-13207.herokuapp.com/findAdminEmails`)
            .then(res => res.json())
            .then(data => setEmailList(data))
    }, [])

    const handleOnBlur = (e) => {
        setEmail({ email: e.target.value });
    }

    const handleFormSubmit = (e) => {
        console.log(email)
        fetch('https://intense-lowlands-13207.herokuapp.com/addNewAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert("Admin added successfully!")
                } else {
                    window.alert("This Admin already added!")
                }

            })
        e.preventDefault();
    }

    return (
        <div className="p-4 my-3" style={{ backgroundColor: 'white' }}>
            <p className="h4  mt-4">Make a New Admin</p>
            <br /> <br />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <form onSubmit={handleFormSubmit}>
                        <label>Add new Admin</label>
                        <input onChange={handleOnBlur} name="title" type="text" className="form-control" required />
                        <br />
                        <button type="submit" className="btn btn-primary">Add Admin</button>
                    </form>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="p-3">
                        <h4>Admin Emails</h4>
                        <ol>
                            {
                                emailList.map((each, index) => <li key={index}> <span>{each.email}</span> </li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;