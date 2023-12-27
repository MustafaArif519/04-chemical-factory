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


export default function Home() {
  return (
   <>
   <WhoAreWe />
   <DoMore />
   
   </>

  );
}