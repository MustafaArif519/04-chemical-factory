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


export default function WhoAreWe() {
  return (
   

     <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Who is GPM?</h1>
              <h3 className='mb-3'>
                
              A pioneer in injection molded polyurethane manufacturing. Protecting the environment. 
              Improving how we live.
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