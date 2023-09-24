<template>
   <ul class="movie-list list-group">
      <MovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @oneToggle="$emit('oneToggle', $event)"
      @onRemove="$emit('onRemove', $event)"
      />
   </ul>
</template>

<script setup>
import MovieListItem from "../move-list-item/MovieListItem.vue";
const props = defineProps({
   movies: {
      type: Array,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
.movie-list {
   margin-bottom: 1rem;
   padding: 1.5rem;
   background-color: #fcfaf5;
   border-radius: 4px;
   box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
.movie-list .list-group-item:last-child {
   border-bottom: none;
}
</style>
