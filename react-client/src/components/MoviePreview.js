// src/components/AthletePreview.js
import React from 'react';
import { Link } from 'react-router';
import MoviePage from './MoviePage';

export default class MoviePreview extends React.Component {
  render() {
    return (
      
      <Link to={`/movie/${this.props.id}`}>
        <div className="movie-preview">
          <img src={`img/${this.props.poster}`}/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
