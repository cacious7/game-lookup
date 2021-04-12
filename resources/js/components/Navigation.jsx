import React from 'react';
import {Navbar, Nav, NavLink} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className="navigation" expand='lg'>
            <Nav>
                <NavLink className='active' to='/home' >
                    <h2 className='highlighter'>VIDEO</h2>
                    <h2>VIDEO GAMES</h2> 
                </NavLink>
                <NavLink to='/contact' >
                    <h2 className='highlighter'>CONTACT</h2>
                    <h2>CONTACT</h2>
                </NavLink>
            </Nav>
        </Navbar>
    );
}

export default Navigation;