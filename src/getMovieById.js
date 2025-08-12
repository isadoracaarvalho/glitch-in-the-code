const movies = require("../data/movies");

function getMovieById(id) {

  const resultado = movies.find(movieObjeto => movieObjeto.id === id)

  return resultado || undefined
  
}

module.exports = {
  getMovieById
}