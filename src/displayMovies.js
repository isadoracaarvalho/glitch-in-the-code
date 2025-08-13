const { movies } = require("../data/list1");

const displayMovies = (movies) => {

  if (movies.length === 0) return

  movies.forEach(movie => {
    console.log(`Título: ${movie.titulo} - Diretor: ${movie.diretor}`);
  });

}

module.exports = {
  displayMovies
}