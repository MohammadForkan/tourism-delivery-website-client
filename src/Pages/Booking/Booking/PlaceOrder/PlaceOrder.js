import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Home/Footer/Footer';
import './PlaceOrder.css';

const PlaceOrder = (data) => {

    // const { serviceId } = useParams();
    // const [services, setService] = useState([]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        if (data) {
            alert('Order added successfully');
            reset();

        }
    };

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [serviceId])

    // fetch('http://localhost:5000/services', {
    //     method: 'POST', 
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(serviceId)
    // })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result)
    //     })

    return (
        <div>
            <form className="placeOrder-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input className="btn btn-danger" type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;