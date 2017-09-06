import React from 'react';
import { Link } from 'react-router';

export default class MoviesMenu extends React.Component {
  render() {
    return (
      <nav className="movies-menu">
        {this.props.movies.map(menuMovie => {
          return <Link key={menuMovie.id} to={`/movie/${menuMovie.id}`} activeClassName="active">
            {menuMovie.name}
          </Link>;
        })}
      </nav>
    );
  }
}
