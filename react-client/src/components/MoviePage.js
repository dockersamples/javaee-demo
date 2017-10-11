import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import MoviesMenu from './MoviesMenu';

var API_HOST = process.env.API_HOST; 	
var REQUEST_URL = `http://${API_HOST}/movieplex7-1.0-SNAPSHOT/webresources/movie/`;
var parseXml = require('xmljson').to_json;

function status(response) {  
  if (response.ok) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error('fail')).then(function(error){
      console.log(error);
    }, function(error){
      console.log(error);
    });  
  }  
}

function clone(response) {
  return response.clone();
}

function text(response) {  
  return response.text()  
}

function parseToJson(response) {
  console.log('MoviePage response to JSON');
  var movielist = [];
  parseXml(response, function (error, data){
    console.log(data);
    for (var key in data.movies.movie){
      movielist.push(data.movies.movie[key]);
    }
    console.log("list: ", movielist.toString());
  });
  
  return(movielist);
}

export default class MoviePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      movies: [] 
    };
  }

  componentDidMount() {
    this.MovieList();
  }

  MovieList(){
    if (window.location.host.indexOf('play')) {
      REQUEST_URL = "https://" + window.location.host.replace("-80.host", "-8080.host")+"/movieplex7-1.0-SNAPSHOT/webresources/movie/";
    };
    
    return (
      fetch(REQUEST_URL, {mode: 'cors'})
      .then(status)
      .then(clone)
      .then(text)
      .then(parseToJson)
      .then((movies) => {this.setState({ movies })
      })
    )
  } 

  render() {
    const { movies } = this.state;
    const id = this.props.params.id;
    const movie = movies.filter((movie) => movie.id == id)[0]
    if (!movie) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/banner.jpg)` };
    return (
      <div className="movie-full">        
        <MoviesMenu movies={movies}/>
        <div className="movie">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${movie.poster}`}/>
            <h2 className="name">{movie.name}</h2>
          </div>
          <section className="description">
            Cast: {movie.actors} <br />
            Rating: {movie.rating} <br />
            (Find out more on <a href={movie.link} target="_blank">IMDB</a>).
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
