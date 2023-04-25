function scrapeCharts() {
  // for bollywood and hollywood movies
  var movies = [];
  var TRs = document.querySelectorAll("tr");
  var titleSelectorName = "titleColumn";
  var ratingSelectorName = "ratingColumn";
  TRs.forEach((ele) => {
    var ratingElement = ele.querySelector("." + ratingSelectorName);
    if (!ratingElement) return;
    rating = Number(ratingElement.innerText);
    var title = ele.querySelector("." + titleSelectorName);
    if (!title) return;
    let anchorTag = title.querySelector("a");
    var movieName = anchorTag.innerText;
    movies.push({ rating: rating, name: movieName });
  });
  console.log(JSON.stringify(movies));
}

function scrapeListAndSearch() {
  // for superhero movies and hollywood movies
  var movies = [];
  var TRs = document.querySelectorAll(".lister-item");
  var titleSelectorName = "lister-item-header";
  var ratingSelectorName = "ipl-rating-star__rating";
  TRs.forEach((ele) => {
    var title = ele.querySelector("." + titleSelectorName);
    if (!title) return;
    var anchorTag = title.querySelector("a");
    var rating = null;
    var movieName = anchorTag.innerText;

    var ratingElement = ele.querySelector("." + ratingSelectorName);
    if (ratingElement) {
      rating = Number(ratingElement.innerText);
    }

    movies.push({ rating: rating, name: movieName });
  });
  console.log(JSON.stringify(movies));
}

//only get upto top 150 after than movie are irrelevant to most people

//Holywood movies
//link = https://www.imdb.com/chart/moviemeter/?sort=ir,desc&mode=simple&page=1

//Bollywood movies (sorted by no. of rating meaning how popular they are)
//link = https://www.imdb.com/india/top-rated-indian-movies/?sort=nv,desc&mode=simple&page=1

//every months go to this site, run the above code and update movieList.json

//Superhero movies (sorted by popularity)
//https://www.imdb.com/search/title/?title_type=feature&num_votes=3000,&keywords=superhero

//Animated movies (sorted by popularity)
//link https://www.imdb.com/search/title/?title_type=feature&num_votes=25000,&genres=animation

//Anime movies
//https://www.imdb.com/search/title/?title_type=tv_series&num_votes=1000,&genres=animation&keywords=anime
