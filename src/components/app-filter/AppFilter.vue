<template>
   <div class="btn-group">
      <button
         v-for="button in filterButtons"
         :key="button.name"
         @click="filterHandler(button.name)"
         type="button"
         class="btn"
         :class="[
            props.filterName === button.name ? 'btn-dark' : 'btn-outline-dark',
         ]"
      >
         {{ button.title }}
      </button>
   </div>
</template>

<script setup>
import { ref } from "vue";
const filter = ref("all");
const filterButtons = ref([
   { title: "Barcha kinolar", name: "all" },
   { title: "Mashhur kinolar", name: "popular" },
   { title: "Eng ko'p ko'rilgan kinolar", name: "mostViewers" },
]);

const props = defineProps({
   updateFilterHandler: {
      type: Function,
      required: true,
   },
   filterName: {
      type: String,
      required: true,
   },
});

const filterHandler = (value) => {
   filter.value = value;
   props.updateFilterHandler(value);
};
</script>

<style lang="scss" scoped></style>
