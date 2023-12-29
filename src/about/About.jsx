import { useEffect } from 'react';
import {

} from 'mdb-react-ui-kit';
import Header from './Header';
import Body from './Body';


export default function About() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // You can also use the following line for smooth scrolling (if supported by the browser)
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    
   <>
   <title>About | GPM</title>
    <Header />
    <Body />
   
   </>

  );
}