import React, { useEffect, useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import { TypeAnimation } from 'react-type-animation';


export default function WhoAreWe() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update windowWidth on resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const determineHeight = () => {
    if (windowWidth <= 767) {
      return { height: '60px' }; // Set the height for phones
    } else {
      return { height: '50px' }; // Set the height for laptops and larger screens
    }
  };

  return (


    <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500 }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Who is GPM?</h1>
            <h3 className='mb-3' style={{ width: '100%', ...determineHeight() }}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'A pioneer in injection molded polyurethane manufacturing',

                  2500, // wait 1s before replacing "Mice" with "Hamsters"
                  'Protecting the environment',
                  2500,
                  'Improving how we live',
                  2500,

                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />

            </h3>
            <NavLink to="/products" >
            <MDBBtn outline rounded color='light'>
            
              Discover More

            </MDBBtn>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

  );
}