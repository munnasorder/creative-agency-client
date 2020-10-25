import React from 'react';
import { Link } from 'react-router-dom';

const ProvidedServicesList = (props) => {
    const { description, title, imageUrl} = props.data;
    return (
        <Link to={`/user/${title}`}  style={{textDecoration:'none', color: 'inherit'}}>
            <div className="card m-3 px-3">
                <div className="text-center service-info  p-4">
                    <img src={imageUrl} height="80" alt="" /> <br /> <br />
                    <h5 className="font-weight-bold">{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </Link>

    );
};

export default ProvidedServicesList;