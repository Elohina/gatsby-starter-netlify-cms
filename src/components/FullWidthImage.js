import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Navbar from './Navbar';

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
          height: '100vh',
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={'cover'}
            objectPosition={imgPosition}
            style={{
              gridArea: '1/1',
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: '100%',
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=''
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={'cover'}
            objectPosition={imgPosition}
            style={{
              gridArea: '1/1',
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout='fullWidth'
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=''
            formats={['auto', 'webp', 'avif']}
          />
        )}
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
              height: '60%',
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
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
            )}
          </div>
        )}
        <Navbar />
        {subheading && (
          <div
            style={{
              placeItems: 'center',
              display: 'block',
              alignItems: 'center',
              marginTop: '2rem',
              height: '30%',
              fontStyle: 'italic',
            }}
          >
            {subheading && (
              <h4
                style={{
                  lineHeight: '1.5',
                  padding: '2rem',
                  margin: '0 auto',
                  textAlign: 'center',
                  width: '40%',
                  fontWeight: '300',
                  fontSize: '1.2rem'
                }}
              >
                {subheading}
              </h4>
            )}
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
