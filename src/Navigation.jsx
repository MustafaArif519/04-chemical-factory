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
                <MDBNavbarBrand onClick={() => setOpenNavSecond(false)} ><NavLink to="/">
                                GPM
                            </NavLink  ></MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar center open={openNavSecond}>
                    <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>

                        <MDBNavbarLink >
                            <NavLink to="/products" onClick={() => setOpenNavSecond(false)}>
                                Products
                            </NavLink  >
                        </MDBNavbarLink>

                        <MDBNavbarLink >
                            <NavLink to="/why" onClick={() => setOpenNavSecond(false)}>
                                Why GPM?
                            </NavLink  >
                        </MDBNavbarLink>

                        <MDBNavbarLink >
                            <NavLink to="/about" onClick={() => setOpenNavSecond(false)}>
                                About Us
                            </NavLink  >
                        </MDBNavbarLink>

                        {/* <MDBNavbarLink >
                            <NavLink to="/contact">
                                Contact
                            </NavLink  >
                        </MDBNavbarLink> */}

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}