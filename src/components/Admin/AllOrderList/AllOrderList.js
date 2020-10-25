import React, { useEffect, useState } from 'react';

const AllOrderList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://intense-lowlands-13207.herokuapp.com/totalOrders`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div >
            <div className="py-2">
                <h4>List of Orders - Total {data.length}</h4>
            </div>
            <div className="d-flex flex-wrap p-5" style={{ height: '450px', overflow: 'auto', backgroundColor: '#f4f7fc' }}>
                <table className="table table-hover p-3 bg-white " >
                    <thead style={{fontWeight:'500'}}>
                        <tr className="table-primary" style={{fontWeight:'500'}}>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody style={{ height: "600px", overflow: 'auto'}}>
                        {
                            data.map((each, index) =>
                                <tr style={{fontWeight:'500'}}>
                                    <td>{index + 1}</td>
                                    <td>{each.name}</td>
                                    <td>{each.email}</td>
                                    <td>{each.serviceTitle}</td>
                                    <td style={{ maxWidth: '150px' }}>{each.details}</td>
                                    <td style={{ color: 'red'}}>Pending</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AllOrderList;