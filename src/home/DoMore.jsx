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
    MDBCol
} from 'mdb-react-ui-kit';


export default function DoMore() {
    return (
        <>
        <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 800 }}
                >
            <MDBRow className='mb-3'>

                
                    <div >
                        <div className='d-flex justify-content-center align-items-center h-50'>
                            <div >
                                <h1 className='mb-3 ' >
                                    Do more with Green Polymeric Materials
                                </h1>
                                <p className=''>
                                    Green Polymeric Materials, Inc. manufactures and supplies high-performance
                                    recycled rubber based components and materials for the automotive, appliance,
                                    aerospace, and heavy transportation industries. We have shipped over 100 million
                                    parts world-wide for use in over 50 platforms for Ford, GM, Nissan, Honda, Mercedes,
                                    and BMW.
                                </p>
                            </div>
                        </div>
                    </div>
                
            </MDBRow>
            <MDBRow className='mb-3'>
            <MDBCol className='mb-4'>
                <MDBCard>
                    <MDBCardImage src={import.meta.env.BASE_URL+"images/improveCard.jpg"} alt='...' position='top' />
                    <MDBCardBody>
                        <MDBCardTitle>Improve Products</MDBCardTitle>
                        <MDBCardText>
                        GPM designs and produces components & materials that have superior
                         performance properties, reduced weight, and are cost effective.
                        </MDBCardText>
                    </MDBCardBody>

                </MDBCard>
                </MDBCol>
                <MDBCol className='mb-4'>
                <MDBCard>
                    <MDBCardImage src={import.meta.env.BASE_URL+"images/optimizeCard.jpg"} alt='...' position='top' />
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
                <MDBCard>
                    <MDBCardImage src={import.meta.env.BASE_URL+"images/greenCard.jpg"} alt='...' position='top' />
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
            </div>
        </>
    );
}