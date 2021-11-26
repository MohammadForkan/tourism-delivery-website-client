import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Home/Footer/Footer';

const Booking = () => {

    const { serviceId } = useParams();
    const [services, setService] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://aqueous-thicket-94190.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handlePlaceOrder = () => {
        history.push('/placeOrder');
    }

    // const ExactItem = data.filter(td => td.id == serviceId)
    // console.log(ExactItem);
    return (
        <div>
            <div>
                <br />
                {/* //<h2>This is booking: {serviceId}</h2> */}
                {/* <h2>This is booking: {serviceId.name}</h2>
            <h2>This is booking: {services.description}</h2> */}
                {/* <img src={services.img} alt="" /> */}
                {/* <div className="team-details">
                <div className="team"></div>
            </div> */}
                <br />
                <div className="row d-flex">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img src={services.img} alt="" />
                        </div>
                        <br /><br />
                        <button className="btn btn-danger w-50">Remove Item</button>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-danger">{services.name}</h3>
                        <br />
                        <p>{services.description}</p>
                        <br />
                        <button onClick={handlePlaceOrder} className="btn btn-danger w-50">Place Order</button>
                        <br /> <br />
                        {/* <button onClick={handlePlaceOrder} className="btn btn-danger w-50">Remove Item</button> */}
                    </div>
                </div>

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Booking;