import * as React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ title, text, author, image }) => {
  const formattedImage = getImage(image) || image;

  return (
    <div className='card'>
      <div className={title ? 'card-title' : ''}>
        <h4>{title}</h4>
      </div>
      <div
        className='card-body'
        style={{
          height: '100%',
          padding: image ? '0 1rem 2rem 1rem' : '2.2rem',
          //centrando a Andy.. es esto posible?
          textAlign: author === 'Andrea De la Garza' ? 'center' : 'left'
        }}
      >
        {image ? (
          // <img src={formattedImage} />
          <GatsbyImage
            image={formattedImage}
            objectFit={'cover'}
            width='100%'
            height='100%'
            style={{
              flexGrow: '1',
            }}
            layout='fullWidth'
            // // You can optionally force an aspect ratio for the generated image
            // aspectratio={3 / 1}
            // // This is a presentational image, so the alt should be an empty string
            alt={author}
            formats={['auto', 'webp', 'avif', 'png']}
          />
        ) : (
          text && text.map((t) => <p>{t}</p>)
        )}
        <p style={{ textAlign: 'right' }}>
          <em>{author}</em>
        </p>
      </div>
    </div>
  );};

Card.propTypes = {
  cardContent: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.array,
      author: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
};

export default Card;
