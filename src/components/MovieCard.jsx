// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <h4 className="page-title">{ title }</h4>
          <h5 className="page-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <img className="movie-card-image" src={ imagePath } alt={ title } />
        </div>
        <Rating className="movie-card-rating" rating={ rating } />
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
