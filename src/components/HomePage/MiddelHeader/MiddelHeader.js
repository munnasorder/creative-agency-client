import React from 'react';
import middelImage from '../../../images/logos/Frame.png';


const MiddelHeader = () => {
    return (
        <div>
            <div className="row my-5">
                <div className="col-md-6 ">
                    <div className="p-2">
                        <h1 className="font-weight-bold">Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className="brand-dark-btn">Hire Us</button>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <img src={middelImage} height="100" className="img-fluid p-3" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MiddelHeader;