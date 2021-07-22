// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <h4 className="page-title">{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <h5 className="page-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
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
