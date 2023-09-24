<template>
   <div class="app font-monospace">
      <div class="content">
         <AppInfo :allMoviesCount="movies.length" :favouriteMoviesCount="movies.filter(movie => movie.favourite).length"/>
         <div class="search-pannel">
            <SearchPannel />
            <AppFilter />
         </div>
         <MovieList @onLike="likeHandler" :movies="movies"/>
         <MovieAddForm @createMovie="createMovie"/>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPannel from "@/components/search-pannel/SearchPannel.vue";
import AppFilter from "@/components/app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import MovieAddForm from "../movie-add-form/MovieAddForm.vue";

const movies = ref([
   {
      id: 1,
      name: "Osmondagi bolalar",
      viewers: 511,
      favourite: false,
      like: true
   },
   {
      id: 2,
      name: "Kelinlar qo'zg'oloni",
      viewers: 745,
      favourite: false,
      like: false
   },
   {
      id: 3,
      name: "Abdullajon",
      viewers: 861,
      favourite: true,
      like: true
   },
]);

const likeHandler = (id) => {
   movies.value =  movies.value.map(item => {
      if (item.id === id) {
         item.like = !item.like
      }
      return item;
   });
}

const createMovie = (movie) => {
   movies.value.push(movie);
} 
</script>

<style lang="scss">
.app {
   height: 100vh;
   color: #000;
   .content {
      width: 1000px;
      min-height: 700px;
      background-color: #fff;
      margin: 0 auto;
      padding: 5rem 0;
      .search-pannel {
         margin-top: 2rem;
         padding: 1.5rem;
         background-color: #fcfaf5;
         border-radius: 4px;
         box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
      }
   }
}
</style>
