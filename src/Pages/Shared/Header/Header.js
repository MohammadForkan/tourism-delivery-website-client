import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><h2><span className="text-danger">Trip</span>Guide</h2></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home"><h5>Home</h5></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"><h5>Services</h5></Nav.Link>
                        <Nav.Link as={HashLink} to="/showOrder"><h5>Show Order</h5></Nav.Link>
                        <Nav.Link as={HashLink} to="/manageOrder"><h5>Manage Order</h5></Nav.Link>
                        <Nav.Link as={HashLink} to="/addEvents"><h5>Add New Service</h5></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts"><h5>Guiders</h5></Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light"><h5>Logout</h5></Button> :
                            <Nav.Link as={Link} to="/login"><h5>Login</h5></Nav.Link>}
                        <Navbar.Text className="p-2 m-3">
                            <a className="" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;