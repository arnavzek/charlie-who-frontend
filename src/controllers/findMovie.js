import hollywoodMovieList from "../movies/hollywoodMovieList.json";
import animatedMovieList from "../movies/animatedMovieList.json";
import animeMovieList from "../movies/animeMovieList.json";
import superheroMovieList from "../movies/superheroMovieList.json";
import bollywoodMovieList from "../movies/bollywoodMovieList.json";

async function findMovie() {
  let category = window.category;
  let movieList = hollywoodMovieList;

  switch (category) {
    case "hollywood":
      movieList = hollywoodMovieList;
      break;
    case "anime":
      movieList = animeMovieList;
      break;
    case "superheroes":
      movieList = superheroMovieList;
      break;
    case "animated":
      movieList = animatedMovieList;
      break;
    case "bollywood":
      movieList = bollywoodMovieList;
      break;
  }

  window.dispatch({
    type: "UPDATE",
    field: "movieToExpress",
    value: null,
  });
  let index = getRandomNumberFavourLowerIndex(movieList.length - 1);

  let movieName = movieList[index].name;

  let fetchedData = await wikiAPI(
    `origin=*&action=query&list=search&srsearch=${movieName} film &utf8=&format=json`
  );
  //this query is necessary for correcting the movie name

  movieName = fetchedData.query.search[0].title;

  fetchedData = await wikiAPI(
    `origin=*&action=query&format=json&redirects=1&prop=pageimages%7Cextracts&pithumbsize=300&titles=${movieName}&pilicense=any&exsentences=4&explaintext=1&exsectionformat=plain`
  );

  let articleData = fetchedData.query.pages;
  for (let key in articleData) {
    let poster = articleData[key].thumbnail.source;
    window.dispatch({
      type: "UPDATE",
      field: "movieToExpress",
      value: { movieName, poster },
    });
  }
}

function getRandomNumberFavourLowerIndex(max) {
  let smallestIndex = max;
  for (let x = 0; x <= 3; x++) {
    let no = Math.round(Math.random() * max);
    if (no < smallestIndex) smallestIndex = no;
  }

  return smallestIndex;
}

async function wikiAPI(query) {
  let fetchedData = await fetch("https://en.wikipedia.org/w/api.php?" + query);
  return await fetchedData.json();
}

export default findMovie;
