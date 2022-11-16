var express = require("express");
var router = express.Router();

const OWM_API_KEY = process.env.OWM_API_KEY;

router.get("/movies", (req, res) => {
//   fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
//   )
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  )
    .then((response) => response.json())
    .then((data) => {
      // Voir l'objet de tableaux (d'objets) DIRECTEMENT à partir de l'URL de l'API (dans le navigateur)
      res.json({ movies: data.results });
    });
});

module.exports = router;
