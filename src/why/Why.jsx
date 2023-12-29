import {useEffect} from 'react';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';
import Header from './Header';
import Body from './Body';



export default function Why() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // You can also use the following line for smooth scrolling (if supported by the browser)
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    
   <>
   <title>Why Us | GPM</title>
    <Header />
    <Body />
   
   </>

  );
}