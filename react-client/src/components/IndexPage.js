// src/components/IndexPage.js
import React from 'react';
import MoviePreview from './MoviePreview';
import MoviePage from './MoviePage';

var REQUEST_URL
const fileExists = require('file-exists');
fileExists('env.env')
.then(exists => {
  host_url = process.env.HOST + '/movieplex7-1.0-SNAPSHOT/webresources/movie/';
  REQUEST_URL = host_url;
})
.catch(err => {
 REQUEST_URL = 'http://localhost:8080/movieplex7-1.0-SNAPSHOT/webresources/movie/';
});

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
  var movielist = [];
  parseXml(response, function (error, data){
    for (var key in data.movies.movie){
      movielist.push(data.movies.movie[key]);
    }
  });
  return(movielist);
}

export default class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      movies : null 
    };
  }

  componentDidMount() {
    fetch(REQUEST_URL)
    .then(status)
    .then(clone)
    .then(text)
    .then(parseToJson)
    .then((movies) => {this.setState({ movies });
    });
  }  

  render() {
    if(!this.state.movies){
      return <div>Loading ... </div>
    }
    return (
      <div className="home">
        <div className="movies-selector">
          {this.state.movies.map(movieData => <MoviePreview key={movieData.id} {...movieData} />)}
        </div>
      </div>
    );
  }
}

