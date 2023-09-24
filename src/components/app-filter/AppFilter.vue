<template>
    <div class="btn-group">
        <button @click="filterHandler('all')" class="btn" :class="[props.filterName === 'all' ? 'btn-dark' : 'btn-outline-dark']">
            Barcha kinolar
        </button>
        <button @click="filterHandler('popular')" class="btn" :class="[props.filterName === 'popular' ? 'btn-dark' : 'btn-outline-dark']">
            Mashhur kinolar
        </button>
        <button @click="filterHandler('mostViewers')" class="btn" :class="[props.filterName === 'mostViewers' ? 'btn-dark' : 'btn-outline-dark']">
            Eng ko'p ko'rilgan kinolar
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const filter = ref("all");

const props = defineProps({
    updateFilterHandler: {
        type: Function,
        required: true
    },
    filterName: {
        type: String,
        required: true
    }
});

const filterHandler = (value) => {
    filter.value = value;
    props.updateFilterHandler(value);
}
</script>

<style lang="scss" scoped></style>