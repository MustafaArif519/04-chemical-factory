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

                        <MDBCol md='9' >
                            <h1>
                                Products and Materials
                            </h1>
                            <p>
                                We deliver specialized parts and components for a wide variety
                                of applications. Our products can be found in nearly 25 million
                                vehicles around the world.
                                We produce Flexible Polyurethane Foam (FPF) materials. FPF is a 
                                chemically complex
                                polymeric product having a broad range of load bearing capability 
                                and resiliency. FPF offers
                                protective shock absorption performance, NVH, and long-term sealing
                                 for use in automotive
                                applications. The incorporation of recycled rubber from tires 
                                amplifies Indention
                                Force Deflection (IFD) and static fatigue performance characteristics.
                            </p>
                        </MDBCol>

                        <MDBCol md='3' className='mb-3' style={containerStyle}>
                        <MDBCard  style = {{maxWidth:"300px"}}>
                            <MDBCardImage src={import.meta.env.BASE_URL + "images/molds-1-0.jpg"}
                                alt='...' position='top'
                                style={{ maxHeight: "250px" }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Optimize the Process</MDBCardTitle>
                                <MDBCardText>
                                    GPM parts and materials help reduce part cost and optimize
                                    application design through elimination of assembly operations and
                                    part integration.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow >

                        <MDBCol className='mb-3'>
                        <div className='h-100' style = {{maxWidth:"300px", maxHeight: "350px"}}>
                           

                                <h1>Technical Information</h1>
                                <p>
                                We have over 50 years of collective knowledge we use to 
                                develop innovative and effective rubber and polyurethane 
                                application solutions. Our experience designing and producing 
                                advanced polymer materials and parts enables us to offer services 
                                that are second to none and cost effective.
                                </p>


                        </div>
                        </MDBCol>

                        <MDBCol className='mb-9' style={containerStyle}>
                        <MDBRipple rippleColor='light' rippleTag='div' 
                     className='bg-image hover-overlay'>
                        <div className='bg-image hover-zoom rounded img-thumbnail'>
                            <img src={import.meta.env.BASE_URL + "images/tech-process-chart_orig.png"} 
                            style={{width:"800px"}} />
                        </div>
                        </MDBRipple>
                        </MDBCol>
                    </MDBRow>
<MDBRow>
<h1>Material Selection Guidelines</h1>

<p>Our advanced polymer research team can develop the best material for your application. Common material and product considerations include the following:</p>
<p>
<ul>
  <li>Temperature range resistance</li>
  <li>Resistance to oils and other fluids</li>
  <li>Sealing from fluids and weather resistance</li>
  <li>Durability, longevity, and physical strength</li>
  <li>Industry and military standards</li>
  <li>Environmental impact</li>
</ul>
</p>

</MDBRow>

                </div>
            </header>
        </>
    );
}