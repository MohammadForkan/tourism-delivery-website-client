import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Services from '../Home/Services/Services';

const ManageOrders = () => {
    // const { serviceId } = useParams();
    const [order, setOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch("https://aqueous-thicket-94190.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    ////Dele processing
    const handleDelete = id => {
        const url = `https://aqueous-thicket-94190.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Successfully Deleted');
                    const remaining = order.filter(pd => pd._id !== id)
                    setOrder(remaining);
                }
            })
    }

    return (
        <div>
            <div className="container">
                <br />
                <h1 className="text-info text-center"><b>Show All Orders The Below</b></h1>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {order?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td><img src={pd?.img} alt="" /></td>
                                <td>{pd?.name}</td>
                                <td>{pd?.description}</td>
                                <button onClick={() => handleDelete(pd._id)} className="btn bg-danger w-80 p-3 m-5">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default ManageOrders;