import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '../components/Card';

const FeatureGrid = ({ gridItems }) => (
  <div className='cards-grid'>
    {gridItems.map((item) => (
      <Card
        key={item.author}
        title={item.title}
        text={item.text}
        author={item.author}
        image={item.image}
      />
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
