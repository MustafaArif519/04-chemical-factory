import React from 'react';
import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer

} from 'mdb-react-ui-kit';
import { TypeAnimation } from 'react-type-animation';


export default function Header() {

    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right top, #361a3f, #37204a, #372655, #342d60, #2f346c)',

        width: '100%',

    };

    return (
        <>
            <header style={gradientStyle}>


                <div className='p-5 text-left text-light'>
                    <br />
                    <br />
                    <h1 className='mb-3'>Products</h1>
                    <h4 className='mb-3'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'MOLDED POLYURETHANE COMPONENTS',

                            ]}
                            wrapper="span"
                            speed={40}

                            repeat={0}
                        />
                    </h4>

                </div>
            </header>
        </>
    );
}