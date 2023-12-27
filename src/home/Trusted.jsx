import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Trusted() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right top, #10e1fc, #00c5f1, #00aae2, #008ecf, #2b72b7)',
    width: '100%',
    height: '500px', // Adjusted height for the container
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const carouselContainerStyle = {
    maxWidth: '900px',
    width: '100%',
    height: '400px', // Adjusted height for the carousel
    overflow: 'hidden', // Ensure items don't overflow
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'contain', // Crop by zooming in
    maxWidth: '600px'
  };

  return (
    <div className='p-5 text-center bg-light' style={gradientStyle}>
      <MDBRow className='mb-3'>
        <div>
          <div className='d-flex justify-content-center align-items-center h-50'>
            <div>
              <h1 className='mb-3 text-white'>Trusted By:</h1>
            </div>
          </div>
        </div>
      </MDBRow>

      <MDBRow className='mb-2' style={carouselContainerStyle}>
        <MDBCarousel showControls fade showIndicators>
          <MDBCarouselItem itemId={1}>
            <img
              style={imageStyle}
              src={import.meta.env.BASE_URL + 'images/nissan.png'}
              alt='Nissan'
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              style={imageStyle}
              src={import.meta.env.BASE_URL + 'images/jeep.png'}
              alt='Jeep'
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img
              style={imageStyle}
              src={import.meta.env.BASE_URL + 'images/toyota.png'}
              alt='Toyota'
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img
              style={imageStyle}
              src={import.meta.env.BASE_URL + 'images/ford.png'}
              alt='Ford'
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={5}>
            <img
              style={imageStyle}
              src={import.meta.env.BASE_URL + 'images/honda.png'}
              alt='Honda'
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBRow>
    </div>
  );
}
