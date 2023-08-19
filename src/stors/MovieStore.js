import {defineStore} from "pinia";

export const useMovieStore = defineStore('movieStore', {
  state: ()=>{
    movies: [
      {
        id: 1,
        original_title: "Spider man",
        poster_path: "https://swiperjs.com/demos/images/nature-1.jpg",
        isWatched: false,
      },
      {
        id: 2,
        original_title: "Batman",
        poster_path: "https://swiperjs.com/demos/images/nature-2.jpg",
        isWatched: true,
      },
    ];
  }
});