import React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
            <Link to="/">
              <div className="container">
                <img src="/img/banner.jpg"/>
                <div className="centered">MOVIEPLEX7</div>
              </div>
            </Link>
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
