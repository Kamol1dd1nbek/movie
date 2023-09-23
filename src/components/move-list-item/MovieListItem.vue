<template>
      <li class="list-group-item d-flex justify-content-between like favourite">
         <span class="list-group-item-label">Omar</span>
         <input
            type="number"
            class="list-group-item-input"
            defaultValue="811"
         />
         <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn-cookie btn-sm">
               <i class="fas fa-cookie"></i>
            </button>
            <button type="button" class="btn-trash btn-sm">
               <i class="fas fa-trash"></i>
            </button>
            <i class="fas fa-star"></i>
         </div>
      </li>
</template>

<script setup></script>

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
      transition: .3s all;
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
