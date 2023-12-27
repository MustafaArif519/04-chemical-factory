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
import WhoAreWe from './WhoAreWe';
import DoMore from './DoMore';
import Tires from './Tires';
import Trusted from './Trusted';


export default function Home() {
  return (
    
   <>
   <title>Home | GPM</title>
   <WhoAreWe />
   <DoMore />
   <Tires/>
   <Trusted />
   
   </>

  );
}