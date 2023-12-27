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
    MDBIcon
} from 'mdb-react-ui-kit';


export default function Tires() {

    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right top, #0a469f, #264bad, #3b4fbb, #5053c9, #6456d6)',
        // Add other styles as needed
        width: '100%',
        height: '800',
        
    };



    return (
        <>
        
            <div
                className='p-5 text-center bg-light'
                style={gradientStyle}
            >
                <MDBRow className='mb-3'>


                    <div >
                        <div className='d-flex justify-content-center align-items-center h-50'>
                            <div >
                                <h1 className='mb-3 text-white' >
                                    Over 1 Million Tires Eliminated From Landfills
                                </h1>

                            </div>
                        </div>
                    </div>

                </MDBRow>

                <MDBRow className='mb-3'>
                    <MDBCol md='6'>
                    <MDBRipple rippleColor='light' rippleTag='div' 
                     className='bg-image hover-overlay'>
                        <div className='bg-image hover-zoom rounded img-thumbnail'>
                            <img src={import.meta.env.BASE_URL + "images/tires.jpg"} 
                            className='w-100' />
                        </div>
                        </MDBRipple>

                    </MDBCol>
                    <MDBCol md='6'>
                        <p className='text-white'>
                            Our commitment to both the environment and technical
                            improvements has led to the development of Foamed Polyurethane
                            Parts made out of 25% recycled tire rubber. These products have
                            enhanced performance properties, significantly increased durability
                            characteristics, are lighter in weight, require less energy to
                            manufacture, and have re-purposed over 1 million tires and saved them
                            from landfills.
                        </p>

                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}