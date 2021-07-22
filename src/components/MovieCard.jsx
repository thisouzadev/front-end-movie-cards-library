// implement MovieCard component here
import React, { Component } from 'react';

export class MovieCard extends Component {
  render() {
    const { movies: { title } } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
      </div>
    );
  }
}

export default MovieCard;
