import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
        <div className="container group">
          <h1>MOVIEPLEX 7</h1>
            <Link to="/">
              {<img className="logo" src="./img/banner.jpg"/>}
            </Link>
          </div>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
           Client application for JavaEE Movieplex MTA example 
          </p>
        </footer>
      </div>
    );
  }
}
