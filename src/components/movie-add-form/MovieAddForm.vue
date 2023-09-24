<template>
   <div class="movie-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form @submit.prevent class="add-form d-flex">
         <input
            type="text"
            class="form-control new-movie-label"
            placeholder="Qanday kino?"
            v-model="form.name"
         />
         <input
            type="number"
            class="form-control new-movie-label"
            placeholder="Nechi marotoba ko'rilgan?"
            v-model="form.viewers"
         />
         <button
            @click="addMovie($emit)"
            class="btn btn-outline-dark"
            type="submit"
         >
            Qo'shish
         </button>
      </form>
   </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
   name: "",
   viewers: null,
});

function addMovie($emit) {
   if (!form.name || !form.viewers) return;
   const newMovie = {
      id: Date.now(),
      ...form,
      favourite: false,
      like: false,
   };
   $emit("createMovie", newMovie);
   form.name = "";
   form.viewers = null;
}
</script>

<style lang="scss" scoped>
.movie-add-form {
   margin-bottom: 1rem;
   padding: 1.5rem;
   background-color: #fcfaf5;
   border-radius: 4px;
   box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
