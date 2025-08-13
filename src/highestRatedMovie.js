const movies = require("../data/movies");

const highestRatedMovie = (movies) => {

  if( movies.length === 0 ) return undefined

  const resultado = movies.reduce((anterior, atual) => {
    return atual.avaliacao > anterior.avaliacao ? atual : anterior
  });

  return resultado

}

module.exports = {
  highestRatedMovie
}