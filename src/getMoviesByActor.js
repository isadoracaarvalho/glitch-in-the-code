const movies = require("../data/movies");

function getMoviesByActor(ator) {
  
  const resultado = movies.filter(objeto => objeto.elenco.includes(ator))

  return resultado

}

module.exports = {
  getMoviesByActor
}