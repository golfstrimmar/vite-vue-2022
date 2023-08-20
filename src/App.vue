<template lang="pug">
//- .wrapper
//-   .container
//-     Header
//-     div.main
//-       Hero
main
  .container
    header.header
      SvgIcon(name='vite')
      h2 My Favorite Movies
    .tabs
      button(:class="['btn', { btn_green: movieStore.activeTab === 1 }]" @click="setTab(1)")
        | Favorite
      button(:class="['btn', { btn_green: movieStore.activeTab === 2 }]" @click="setTab(2)")
        | Search
    .movies(v-if='movieStore.activeTab === 1')
      div
        h3 Watched Movies (count: {{ movieStore.watchedMovies.length }})
        Movie(v-for='movie of movieStore.watchedMovies' :key='movie.id' :movie='movie')
      div
        h3 All Movies (count: {{ movieStore.totalCountMovies }})
        Movie(v-for='movie of movieStore.movies' :key='movie.id' :movie='movie')
    .search(v-else) 
      Search







</template>

<script setup>
import Movie from "@/components/Movie.vue";
import SvgIcon from '@/components/SvgIcon.vue'
import Search from "@/components/Search.vue";
import { useMovieStore } from "./stores/MovieStore";
const movieStore = useMovieStore();
const setTab = (id) => {
  movieStore.setActiveTab(id);
};
</script>

<style lang="scss" >
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  svg {
    width: 30px;
    height: 30px;
    margin: 0 11px 0 0;
  }
}

.header-logo {
  max-width: 50px;
  margin-right: 10px;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
