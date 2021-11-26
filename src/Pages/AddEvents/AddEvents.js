import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
import Footer from '../Home/Footer/Footer';

const AddEvents = () => {
    const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        watch, reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        axios.post('https://aqueous-thicket-94190.herokuapp.com/newServices', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <h1 className="mt-4 text-center text-info">Please Add Events</h1>
            <div className="login-box w-30  m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default AddEvents;