import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='http://facebook.com/gpmaterials'
                        className='me-4 text-reset'
                        target="_blank"  // This opens the link in a new tab
                        rel="noopener noreferrer"  // This is recommended for security reasons
                    >
                        <MDBIcon fab icon="facebook-f" />
                    </a>



                    <a href='http://instagram.com/gpmaterials' className='me-4 text-reset'
                        target="_blank"  // This opens the link in a new tab
                        rel="noopener noreferrer"  // This is recommended for security reasons
                    >

                        <MDBIcon fab icon="instagram" />
                    </a>


                    <a href='http://linkedin.com/company/green-polymeric-materials-inc'
                        className='me-4 text-reset'
                        target="_blank"  // This opens the link in a new tab
                        rel="noopener noreferrer"  // This is recommended for security reasons
                    >
                        <MDBIcon fab icon="linkedin" />
                    </a>

                    <a href='http://twitter.com/gpmaterials'
                        className='me-4 text-reset'
                        target="_blank"  // This opens the link in a new tab
                        rel="noopener noreferrer"  // This is recommended for security reasons
                    >
                        <MDBIcon fab icon="twitter" />
                    </a>

                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="8" lg="8" xl="8" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Green Polymeric Materials, Inc ©2018
                            </h6>
                            <p>
                                GPM manufactures and supplies high-performance polyurethane
                                recycled rubber based components and materials for the automotive,
                                appliance, aerospace, and heavy transportation industries.
                            </p>
                        </MDBCol>





                        <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Green Polymeric Materials, Inc.
                                6031 Joy Road
                                Detroit, MI 48204
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                contact@gpmaterials.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> (313) 933-7390
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> (313) 933-7390
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    Green Polymeric Materials, Inc
                </a>
            </div>
        </MDBFooter>
    );
}