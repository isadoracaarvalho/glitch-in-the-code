const movies = require("../data/movies");

const orderMoviesByYear = (movies) => {
  
  if( movies.length === 0 ) return []

  const resultado = movies.toSorted((a, b) => {
    return (a.anoLancamento > b.anoLancamento) ? 1 : -1
  })

  return resultado
}

module.exports = {
  orderMoviesByYear
}