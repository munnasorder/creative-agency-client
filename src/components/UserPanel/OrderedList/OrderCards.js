import React from 'react';
const OrderCards = (props) => {
    const { serviceTitle, details, status, imageUrl } = props.data;
    return (
        <div className="card mw-25 m-3 px-3">
            <div className="p-4">
                <img src={imageUrl} height="70" style={{borderRadius:'50%'}} alt="" />
                    <div style={{backgroundColor:'#FFE3E3', borderRadius:'6px'}} className="p-2 px-4 d-inline-block float-right ml-auto">
                        <span style={{color:'#FF4545'}}>{status}</span>
                    </div>
                <h5 className="font-weight-bold mt-2">{serviceTitle}</h5>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default OrderCards;