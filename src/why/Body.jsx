import React from 'react';
import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup,
    MDBRipple

} from 'mdb-react-ui-kit';
import { TypeAnimation } from 'react-type-animation';


export default function Body() {

    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right top, #81f7a2, #74e99e, #69dc99, #5ece94, #54c18e)',

        width: '100%',

    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'flex-end', // Center on the right

        
      };

    return (
        <>
            <header style={gradientStyle}>


                <div className='p-5 text-left '>

                    <MDBRow >

                        <MDBCol className='mb-6'>
                        <div className='h-100' style = {{}}>
                           

                                <h1>The Value of GPM</h1>
                                <p>
                                ​​How often do you have the opportunity to protect the environment, 
                                improve your product, and improve your financials? Green Polymeric 
                                Materials’ products enable its customers to achieve all these goals.
                                GPM provides custom polymer foam solutions for demanding transportation
                                 and industrial markets that 
                                offer the best economic, environment and performance value. We leverage
                                 over 50 years of polymer 
                                materials expertise to address key design challenges.
                                </p>


                        </div>
                        </MDBCol>

                        <MDBCol className='mb-6' style={containerStyle}>
                        <MDBRipple rippleColor='light' rippleTag='div' 
                     className='bg-image hover-overlay'>
                        <div className='bg-image hover-zoom rounded img-thumbnail'>
                            <img src={import.meta.env.BASE_URL + "images/factoryWorker.jpg"} 
                            style={{}} />
                        </div>
                        </MDBRipple>
                        </MDBCol>
                    </MDBRow>
<MDBRow>
<div>
      <h2>Weight Reduction</h2>
      <p>
        Our customers stand to benefit from as much as a 50% weight reduction over competitive materials.
      </p>

      <h2>Boost Recycled and Renewable Content</h2>
      <p>
        Reduce environmental impact with 42% renewable/recycled content and utilization of post-consumer rubber tire particulate saved from landfills.
      </p>

      <h2>Application Cost Savings</h2>
      <p>
        Reduce part and optimize application design through elimination of assembly operations and part integration.
      </p>

      <h2>Durability and Performance</h2>
      <p>
        Higher dimensional stability and resistance to heat, fluids, and chemicals; as well as superior tensile strength, compression deflection, water resiliency, R-value, and acoustic/vibration insulation.
      </p>
    </div>

</MDBRow>

                </div>
            </header>
        </>
    );
}