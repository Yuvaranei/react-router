import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Topmenu extends React.Component {
    render() {
        return (
            <div>
                Inside top menu
               <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/home">Router Home</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={2} href="/about">About</NavItem>
                        <NavItem eventKey={3} href="/contact">Contact</NavItem>
                    </Nav>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}