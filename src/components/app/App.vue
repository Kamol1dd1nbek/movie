<template>
   <div class="app font-monospace">
      <div class="content">
         <AppInfo
            :allMoviesCount="movies.length"
            :favouriteMoviesCount="
               movies.filter((movie) => movie.favourite).length
            "
         />
         <div class="search-pannel">
            <SearchPannel :updateTermHandler="updateTermHandler" />
            <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter"/>
         </div>
         <MovieList
            @oneToggle="oneToggleHandler"
            @onRemove="onRemoveHandler"
            :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
         />
         <MovieAddForm @createMovie="createMovie" />
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

const term = ref("");
const filter = ref("all");

const movies = ref([
   {
      id: 1,
      name: "Osmondagi bolalar",
      viewers: 511,
      favourite: false,
      like: true,
   },
   {
      id: 2,
      name: "Kelinlar qo'zg'oloni",
      viewers: 434,
      favourite: false,
      like: false,
   },
   {
      id: 3,
      name: "Abdullajon",
      viewers: 861,
      favourite: true,
      like: true,
   },
]);

const oneToggleHandler = ({ id, prop }) => {
   movies.value = movies.value.map((item) => {
      if (item.id === id) {
         return { ...item, [prop]: !item[prop] };
      }
      return item;
   });
};

const onSearchHandler = (arr, term) => {
   if (arr.length == 0) return arr;
   return arr.filter((movie) => movie.name.toLowerCase().indexOf(term) > -1);
};

const onRemoveHandler = (id) => {
   movies.value = movies.value.filter((movie) => movie.id !== id);
};

const createMovie = (movie) => {
   movies.value.push(movie);
};

const updateTermHandler = (value) => {
   term.value = value;
};

const onFilterHandler = (arr, filter) => {
   switch (filter) {
      case "popular":
         return arr.filter(movie => movie.like);
      case "mostViewers":
         return arr.filter(movie => movie.viewers > 500);
      default:
         return arr;
   }
}

const updateFilterHandler = (value) => {
   filter.value = value;
}
</script>

<style lang="scss">
body::-webkit-scrollbar {
   display: none;
}
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
