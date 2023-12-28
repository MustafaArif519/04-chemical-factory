import React, { useEffect, useState } from 'react';
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
      return { height: '120px' }; // Set the height for phones
    } else {
      return { height: '90px' }; // Set the height for laptops and larger screens
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
                                'A pioneer in injection molded polyurethane manufacturing. Protecting the environment.' +
                                'Improving how we live.'

                            ]}
                            />
              
              </h3>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>

  );
}