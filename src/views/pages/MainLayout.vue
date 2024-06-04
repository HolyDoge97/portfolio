<template>
    <div class="layout__container">
        <common-header />
        <div class="layout__body">
            <span @click="data++">{{ getAnyText }}</span>
            <span>{{ data }}</span>
        </div>
    </div>
</template>

<script setup lang="js">
import CommonHeader from '@/views/components/common/CommonHeader.vue'
import { ref, computed } from 'vue'
const data = ref(0)
const getAnyText = computed(() => {
    return 'hello'
})
</script>

<style lang="scss"></style>