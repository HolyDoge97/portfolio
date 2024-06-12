<template>
    <div class="layout__menu" :class="{ active: props.isMenuShow }">
        <button @click="closeMenu">
            <i class="icon__close" />
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['isMenuShow']);
const emits = defineEmits(['closeMenu']);

const closeMenu = () => {
    emits('closeMenu')
}
</script>

<style></style>