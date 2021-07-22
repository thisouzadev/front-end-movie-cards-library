// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <h4 className="page-title">{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape(
      { title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string }.isRequired,
    ),
  ).isRequired,
};

export default MovieCard;
