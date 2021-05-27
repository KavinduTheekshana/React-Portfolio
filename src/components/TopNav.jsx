import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import './TopNav.scss'

function TopNav(props) {
    return (
        <>
            <Navbar className="top-navigation justify-content-center">
                <Nav className="justify-content-center" activeKey="/home">
                    <div className="container">
                    <Nav.Item>
                        <Nav.Link className="navigation-link" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navigation-link" href="">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navigation-link" href="">Bio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navigation-link" href="">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navigation-link" href="">Contact</Nav.Link>
                    </Nav.Item>
                    </div>
                </Nav>
            </Navbar>
        </>
    );
}

export default TopNav;