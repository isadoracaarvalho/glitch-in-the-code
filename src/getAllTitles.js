const movies = require("../data/movies");

const getAllTitles = (movies) => {

  const resultado = movies.map(function(movie) {
    return movie.titulo;
  });

  return resultado;
}

module.exports = {
  getAllTitles
}