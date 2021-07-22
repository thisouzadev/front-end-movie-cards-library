// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
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
