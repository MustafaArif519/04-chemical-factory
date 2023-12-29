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
  MDBRipple,
  MDBBtn,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem

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

  const downloadCertificate1 = () => {
    const certificateUrl = import.meta.env.BASE_URL + 'files/gpm_presentation_1.8.pdf';

    // Create an anchor element for download
    const a = document.createElement('a');
    a.href = certificateUrl;
    a.download = 'gpm_presentation_1.8.pdf';

    // Append the anchor to the document body and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Remove the anchor from the document body
    document.body.removeChild(a);
};

const downloadCertificate2 = () => {
  const certificateUrl = import.meta.env.BASE_URL + 
  'files/iatf_0401698_certificate-52860_green_polymeric_materials_inc._issued_27.may.21_1.pdf';

  // Create an anchor element for download
  const a = document.createElement('a');
  a.href = certificateUrl;
  a.download = 'iatf_0401698_certificate.21_1.pdf';

  // Append the anchor to the document body and trigger the click event
  document.body.appendChild(a);
  a.click();

  // Remove the anchor from the document body
  document.body.removeChild(a);
};

const downloadCertificate3 = () => {
  const certificateUrl = import.meta.env.BASE_URL + 'files/a-520-001_quality_policy_statement.pdf';

  // Create an anchor element for download
  const a = document.createElement('a');
  a.href = certificateUrl;
  a.download = 'a-520-001_quality_policy_statement.pdf';

  // Append the anchor to the document body and trigger the click event
  document.body.appendChild(a);
  a.click();

  // Remove the anchor from the document body
  document.body.removeChild(a);
};

const downloadCertificate4 = () => {
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

const certificateStyle = {
  position: '',
  top: 0,
  left: 0,
  width: '100%',
height: '300px',
  objectFit: 'cover',
  objectPosition: 'center',
};

  return (
    <>
      <header style={gradientStyle}>


        <div className='p-5 text-left '>

          <MDBRow >

            <MDBCol className='mb-8'>
              <div className='h-100' style={{}}>


                <h1>About Us</h1>
                <p>
                  Keys to our success are a continuous flow of innovative ideas
                  and solutions, new chemical technologies and compositions, as
                  well as advanced manufacturing processes.
                  Our commitment to both the environment and technological improvements
                  has led to the development of Foamed Polyurethane Parts made of 25%
                  recycled tire rubber. These products have enhanced performance
                  properties, significantly increased durability characteristics,
                  re lighter in weight, require less energy to manufacture, and have
                  re-purposed over 1 million rubber tires and saved them from landfills.
                  We are well equipped to develop custom polyurethane materials in
                  order to meet your needs and specifications. Our robust manufacturing
                  processes and extensive quality control and inspection procedures
                  ensure top quality.
                </p>


              </div>
            </MDBCol>

            <MDBCol className='mb-4' style={containerStyle}>
              <MDBRipple rippleColor='light' rippleTag='div'
                className='bg-image hover-overlay'>
                <div className='bg-image hover-zoom rounded img-thumbnail'>
                  <img src={import.meta.env.BASE_URL + "images/lab.jpg"}
                    style={{ width: "500px" }} />
                </div>
              </MDBRipple>
            </MDBCol>
          </MDBRow>


          <MDBRow>

            <MDBCol md='7' className='mb-3'>
            <MDBCard style={{  }}>
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
                                        <MDBCardTitle>Certified MBE</MDBCardTitle>
                                        <MDBCardText>
                                        ​Green Polymeric Materials, Inc. is proud to be 
                                        an MMSDC Certified Minority Business Enterprise. 
                                        To view our certificate please 
                                        </MDBCardText>
                                        <br />
                                        <br />
                                        <MDBCardFooter>
                                            <MDBBtn color="secondary" onClick={downloadCertificate4}>
                                                <MDBIcon fas className='me-2' icon="file-download" />

                                                Certificate
                                            </MDBBtn>
                                        </MDBCardFooter>
                                    </MDBCardBody>
                                </MDBCol>


                            </MDBRow>
                        </MDBCard>
            </MDBCol>

            <MDBCol md='5' className='mb-3'>
              <MDBCard style={{}}>
                <MDBCardBody>
                  <MDBCardTitle>GPM Overview</MDBCardTitle>
                  <MDBCardText>
                    To learn more about GPM please download our overview PDFs.
                  </MDBCardText>
                </MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>

                  <div className="d-grid gap-2">
                        <MDBBtn color="secondary" onClick={downloadCertificate1}>
                          <MDBIcon fas className='me-2' icon="file-download" />

                          Overview

                        </MDBBtn>

                      </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <MDBRow>

                    <div className="d-grid gap-2">
                        <MDBBtn color="secondary" onClick={downloadCertificate2} >

                          <MDBIcon fas className='me-2' icon="file-download" />


                          
                          Current IATF-16949 Certificate

                        </MDBBtn>
                      </div>


                    </MDBRow>
                  </MDBListGroupItem>

                  <MDBListGroupItem>
                    <div className="d-grid gap-2">
                        <MDBBtn color="secondary" onClick={downloadCertificate3} >
                          <MDBIcon fas className='me-2' icon="file-download" />Quality Policy


                        </MDBBtn>
                     </div>
                  </MDBListGroupItem>

                  <MDBListGroupItem>
                  <div className="d-grid gap-2">
                        <MDBBtn  color="secondary" onClick={downloadCertificate4}>
                          <MDBIcon fas  className='me-2' icon="file-download" />

                          Current Minority Business Enterprise Certificate

                        </MDBBtn>
                      </div>
                  </MDBListGroupItem>
                </MDBListGroup>

              </MDBCard>

            </MDBCol>

          </MDBRow>

        </div>
      </header>
    </>
  );
}