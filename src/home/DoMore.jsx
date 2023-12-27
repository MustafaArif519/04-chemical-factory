import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBRipple,
    MDBCardHeader,
    MDBIcon
} from 'mdb-react-ui-kit';
import { TypeAnimation } from 'react-type-animation';


export default function DoMore() {

    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right bottom, #61cfc3, #58d1bd, #51d4b6, #4dd5ad, #4ed7a3, #52d99e, #56db98, #5cdd92, #61e191, #66e490, #6ce88f, #71eb8e)',
        // Add other styles as needed
        width: '100%',
        height: '800',
    };

    const certificateStyle = {
        position: '',
        top: 0,
        left: 0,
        width: '100%',
    height: '300px',
        objectFit: 'cover',
        objectPosition: 'center',
    };

    const downloadCertificate = () => {
        const certificateUrl = import.meta.env.BASE_URL + 'files/minority_cert_exp_2020.pdf';

        // Create an anchor element for download
        const a = document.createElement('a');
        a.href = certificateUrl;
        a.download = 'minority_cert_exp_2020.pdf';

        // Append the anchor to the document body and trigger the click event
        document.body.appendChild(a);
        a.click();

        // Remove the anchor from the document body
        document.body.removeChild(a);
    };

    return (
        <>
            <div
                className='p-5 text-center bg-light'
                style={gradientStyle}
            >
                <MDBRow className='mb-3'>



                        <div className='d-flex justify-content-center align-items-center h-50'>

                                <MDBCard className=''
                                alignment='center'style = {{width: "800px"}}>
                                    <MDBCardBody>
                                        <MDBCardTitle>Do more with Green Polymeric Materials</MDBCardTitle>
                                        <MDBCardText>
                                        <TypeAnimation
                                        sequence={[
                                            // Same substring at the start will only be typed out once, initially
                                            'Green Polymeric Materials, Inc. manufactures and supplies high-performance\
                                            recycled rubber based components and materials for the automotive, appliance,\
                                            aerospace, and heavy transportation industries. We have shipped over 100 million\
                                            parts world-wide for use in over 50 platforms for Ford, GM, Nissan, Honda, Mercedes,\
                                            and BMW.',

                                        ]}
                                        wrapper="span"
                                        speed={50}

                                        repeat={0}
                                    />
                                    </MDBCardText>
                                        
                                    </MDBCardBody>

                                </MDBCard>

                        </div>


                </MDBRow>
                <MDBRow className='mb-3'>
                    <MDBCol className='mb-4'>
                        <MDBCard className='h-100'>
                            <MDBCardImage src={import.meta.env.BASE_URL + "images/improveCard.jpg"}
                                alt='...' position='top'
                                style={{ maxHeight: "250px" }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Improve Products</MDBCardTitle>
                                <MDBCardText>
                                    GPM designs and produces components & materials that have superior
                                    performance properties, reduced weight, and are cost effective.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard >
                    </MDBCol>
                    <MDBCol className='mb-4'>
                        <MDBCard className='h-100'>
                            <MDBCardImage src={import.meta.env.BASE_URL + "images/optimizeCard.jpg"}
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
                    <MDBCol className='mb-4'>
                        <MDBCard className='h-100'>
                            <MDBCardImage src={import.meta.env.BASE_URL + "images/greenCard.jpg"}
                                alt='...' position='top'
                                style={{ maxHeight: "250px" }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Go Green</MDBCardTitle>
                                <MDBCardText>
                                    Our parts and materials are responsibly manufactured using
                                    upwards of 35% recycled and Soy Bio-renewable content.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mb-3'>
                    <MDBCol md='8'>
                        <MDBCard style={{ maxWidth: '540px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBRipple rippleColor='light' rippleTag='div'
                                        className='bg-image hover-overlay'>
                                        <div className='bg-image hover-zoom'>
                                            <MDBCardImage
                                                src={import.meta.env.BASE_URL + "images/certificate.png"}
                                                alt='...' fluid
                                                style={certificateStyle}
                                            />
                                        </div>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>MMSDC Certified</MDBCardTitle>
                                        <MDBCardText>
                                            Green Polymeric Materials, INC. is proud to be an MMSDC certified
                                            minority business enterprise. To view our certificate, please
                                            click below
                                        </MDBCardText>
                                        <br />
                                        <br />
                                        <MDBCardFooter>
                                            <MDBBtn color="secondary" onClick={downloadCertificate}>
                                                <MDBIcon fas icon="file-download" />

                                                Certificate
                                            </MDBBtn>
                                        </MDBCardFooter>
                                    </MDBCardBody>
                                </MDBCol>


                            </MDBRow>
                        </MDBCard>

                    </MDBCol>
                    <MDBCol md='4'>
                        <h2>
                            2015 UTECH Polyurethane Automotive and Sustainability Conference
                        </h2>
                        <p>
                            Green Polymeric Materials, Inc. had the honor of presenting at
                            the 2015 UTECH Polyurethane Automotive and Sustainability
                            Conference.
                        </p>

                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}