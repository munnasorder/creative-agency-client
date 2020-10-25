import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../images/icons/deleteIcon.png';

const AvailableServices = () => {
    const [services, setServices] = useState([])
    const [state, setState] = useState(true);

    useEffect(() => {
        fetch(`https://intense-lowlands-13207.herokuapp.com/serviceItem`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [state])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://intense-lowlands-13207.herokuapp.com/deleteItem/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refreshTable();
                    alert("Item deleted successfully!")
                }
            })
    }

    const refreshTable = () => {
        setState(!state);
    }

    return (
        <div>
            <div className="d-flex">
                <h4>Available Service - Total {services.length}</h4>
                <button className="btn color-inherit ml-auto text-dark mb-2" onClick={refreshTable}><i class="fas fa-sync"></i> &nbsp; &nbsp; Refresh</button>
            </div>
            <div className="d-flex flex-wrap p-2" style={{ height: '450px', overflow: 'auto', backgroundColor: '#f4f7fc' }}>
                <table className="table table-hover p-1 bg-white " >
                    <thead style={{ fontWeight: '500' }}>
                        <tr className="table-primary" style={{ fontWeight: '500' }}>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name ID</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ height: "600px", overflow: 'auto' }}>
                        {
                            services.map((each, index) =>
                                <tr style={{ fontWeight: '500' }}>
                                    <td>{index + 1}</td>
                                    <td> <img src={each.imageUrl} height="30" style={{ borderRadius: '50%' }} alt="" /> </td>
                                    <td>{each.title}</td>
                                    <td>
                                        <button style={{ backgroundColor: 'red', border:'none' }} onClick={() => handleDelete(each._id)}>
                                            <img src={deleteIcon} height="20" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AvailableServices;