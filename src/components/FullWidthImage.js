import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import arrow from '../img/quinzeflecha.svg';

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = 'top left',
  } = props;

  return (
    <React.Fragment>
      <div
        className='margin-top-0'
        style={{
          display: 'block',
        }}
      >
        {title && (
          <div
            className='stripesBackground'
            style={{
              borderBottom: '2px solid #da0c25',
              width: '100%',
              gridArea: '1/1',
              position: 'relative',
              // This centers the other elements inside the hero component
              placeItems: 'center',
              display: 'grid',
              height: '50vh',
            }}
          >
            {/* Any content here will be centered in the component */}
            <img
              src={img}
              objectPosition={imgPosition}
              style={{
                // You can set a maximum height for the image, if you wish.
                width: '40%',
              }}
              // This is a presentational image, so the alt should be an empty string
              alt=''
            />
            {/* {title && (
              <h1
                className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
                style={{
                  color: '#da0c25',
                  lineHeight: '1',
                  padding: '0.25em',
                  textAlign: 'center',
                  height: '150px',
                  margin: 'auto',
                }}
              >
                {title}
              </h1>
            )} */}
          </div>
        )}
        <Navbar />
        {subheading && (
          <div
            style={{
              placeItems: 'center',
              display: 'flex',
              alignItems: 'center',
              marginTop: '2rem',
              height: '30%',
              fontStyle: 'italic',
              flexDirection: 'column',
            }}
          >
            {subheading && <h4 className='heroSubheading'>{subheading}</h4>}
            <img
              src={arrow}
              style={{
                // You can set a maximum height for the image, if you wish.
                width: '1.5rem',
                margin: '2rem auto',
              }}
              // This is a presentational image, so the alt should be an empty string
              alt=''
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
