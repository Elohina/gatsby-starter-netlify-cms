import * as React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, text }) => (
  <div className='card'>
    <div className='card-title'>
      <h4>{title}</h4>
    </div>
    <div className='card-body'>{text}</div>
  </div>
);

Card.propTypes = {
  cardContent: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Card;
