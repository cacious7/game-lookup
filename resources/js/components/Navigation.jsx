import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar className="navigation" expand='lg'>
            <Nav>
                <NavLink activeClassName='active' className='nav-link' to='/home' >
                    <h2 className='highlighter'>VIDEO</h2>
                    <h2>VIDEO GAMES</h2> 
                </NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/contact' >
                    <h2 className='highlighter'>CONTACT</h2>
                    <h2>CONTACT</h2>
                </NavLink>
            </Nav>
        </Navbar>
    );
}

export default Navigation;