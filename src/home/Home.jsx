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
import WhoAreWe from './WhoAreWe';
import DoMore from './DoMore';
import Tires from './Tires';
import Trusted from './Trusted';


export default function Home() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // You can also use the following line for smooth scrolling (if supported by the browser)
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
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