<template>
   <li class="list-group-item d-flex justify-content-between" :class="[{like: movie.like}, {favourite: movie.favourite}]">
      <span @click="$emit('oneToggle', {id: movie.id, prop: 'like'})" class="list-group-item-label">{{ movie.name }}</span>
      <input type="number" class="list-group-item-input" :value="movie.viewers"/>
      <div class="d-flex justify-content-center align-items-center">
         <button @click="$emit('oneToggle', {id: movie.id, prop: 'favourite'})" type="button" class="btn-cookie btn-sm">
            <i class="fas fa-cookie"></i>
         </button>
         <button @click="$emit('onRemove', movie.id)" type="button" class="btn-trash btn-sm">
            <i class="fas fa-trash"></i>
         </button>
         <i class="fas fa-star"></i>
      </div>
   </li>
</template>

<script setup>
const props = defineProps({
   movie: {
      type: Object,
      required: true
   }
});
console.log()
</script>

<style lang="scss" scoped>
.list-group-item {
   padding: 15px 20px;
   // border: none;
   border-bottom: 2px solid #3d5a80;
   .list-group-item-label {
      line-height: 35px;
      font-size: 20px;
      cursor: pointer;
      width: 550px;
   }
   input {
      line-height: 35px;
      font-size: 20px;
      text-align: center;
      border: none;
      outline: none;
   }
   button {
      width: 35px;
      height: 35px;
      margin: 3px;
      font-size: 17px;
      cursor: pointer;
      border: none;
   }
   .btn-cookie {
      color: #e09f3a;
   }
   .btn-trash {
      color: #e5383d;
   }
   .fa-star {
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      color: #ffd700;
      text-align: center;
      transition: 0.3s all;
      transform: translateX(30px);
      opacity: 0;
   }
   &.like .fa-star {
      opacity: 1;
      transform: translateX(0);
   }

   &.favourite .list-group-item-label,
   &.favourite .list-group-item-input {
      color: #e09f3a;
   }
}
</style>
