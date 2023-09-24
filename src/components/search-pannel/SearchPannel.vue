<template>
   <div>
      <input
         type="text"
         class="form-control search-input"
         placeholder="Kinolarni qidirish"
         v-model="term"
         @input="changeHandler"
      />
   </div>
</template>

<script setup>
import { ref } from "vue";
const term = ref("");

const props = defineProps({
   updateTermHandler: {
      type: Function,
      required: true
   }
});

const changeHandler = () => {
   props.updateTermHandler(term.value);
}
</script>

<style lang="scss" scoped>
.search-input {
   margin-bottom: 1rem;
   padding: 1.5rem;
   background-color: #fcfaf5;
   border-radius: 4px;
   box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
