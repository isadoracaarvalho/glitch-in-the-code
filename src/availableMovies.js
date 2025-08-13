const movies = require("../data/movies");

const availableMovies = (movies) => {

  const resultado = movies
  .filter((movie) => movie.disponivel)
  .map((movie) => movie.titulo)
  
  return resultado || []
 
}

module.exports = {
  availableMovies
}