import React, { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';


export default function Navigation() {
    const [openNavSecond, setOpenNavSecond] = useState(false);

    return (
        <MDBNavbar fixed='top' expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand ><NavLink to="/">
                                GPM
                            </NavLink  ></MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond}>
                    <MDBNavbarNav>

                        <MDBNavbarLink href='#'>
                            <NavLink to="/products">
                                Products
                            </NavLink  >
                        </MDBNavbarLink>

                        <MDBNavbarLink href='#'>
                            <NavLink to="/why">
                                Why GPM?
                            </NavLink  >
                        </MDBNavbarLink>

                        <MDBNavbarLink href='#'>
                            <NavLink to="/about">
                                About Us
                            </NavLink  >
                        </MDBNavbarLink>

                        <MDBNavbarLink href='#'>
                            <NavLink to="/contact">
                                Contact
                            </NavLink  >
                        </MDBNavbarLink>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}