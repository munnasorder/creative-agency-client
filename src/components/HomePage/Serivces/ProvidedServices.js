import React, { useEffect, useState } from 'react';
import ProvidedServicesList from './ProvidedServicesList';

const ProvidedServices = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`https://intense-lowlands-13207.herokuapp.com/serviceItem`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (

        <div style={{margin:'100px'}}>
            <div className="my-5">
                <h3 className="text-center"><strong>Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></strong></h3>
            </div>
            <div className="pr-4">
                <div className="card-columns">
                    {
                        services.length > 0
                            ?
                            services.map((data, index) => <ProvidedServicesList key={index} data={data} />)
                            :
                            <h6 className="text-center">Please Wait....</h6>
                    }
                </div>
            </div>

        </div>


    );
};

export default ProvidedServices;