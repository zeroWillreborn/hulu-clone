const API = process.env.API_KEY;


export default {
    fetchTrending:{
        title: "Trending",
        url:`/trending/all/week?api_key=${API}&languange=en-US`
    },
    fetchTopRated:{
        title: "Top Rated",
        url:`/movie/top_rated/week?api_key=${API}&languange=en-US&page=1`
    },
    fetchActionMovies:{
        title: "Action",
        url:`/discover/movie?api_key=${API}&with_genres=28`
    },
    fetchComedyMovies:{
        title: "Comedy",
        url:`/discover/movie?api_key=${API}&with_genres=35`
    },
    fetchHorrorMovies:{
        title: "Horror",
        url:`/discover/movie?api_key=${API}&with_genres=27`
    },
    fetchRomanceMovies:{
        title: "Romance",
        url:`/discover/movie?api_key=${API}&with_genres=10749`
    },
    fetchMystery:{
        title: "Mystery",
        url:`/discover/movie?api_key=${API}&with_genres=9648`
    },
    fetchSciFi:{
        title: "Sci-Fi",
        url:`/discover/movie?api_key=${API}&with_genres=878`
    },
    fetchWestern:{
        title: "Western",
        url:`/discover/movie?api_key=${API}&with_genres=37`
    },
    fetchAnimation:{
        title: "Animation",
        url:`/discover/movie?api_key=${API}&with_genres=16`
    },
    fetchTV:{
        title: "TV Movie",
        url:`/discover/movie?api_key=${API}&with_genres=10770`
    },
}