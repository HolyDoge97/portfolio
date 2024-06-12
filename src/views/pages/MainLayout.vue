<template>
    <div class="layout__container">
        <common-header @menuClicked="menuClicked" @snsClicked="snsClicked" />
        <div class="layout__body">
            <span @click="data++">{{ getAnyText }}</span>
            <span>{{ data }}</span>
        </div>
        <menu-from-left-side :isMenuShow="isMenuShow" />
    </div>
</template>

<script setup lang="js">
import MenuFromLeftSide from '@/views/modals/MenuFromLeftSide.vue'
import CommonHeader from '@/views/components/common/CommonHeader.vue'
import { ref, computed } from 'vue'
const data = ref(0)
const isMenuShow = ref(false)
const getAnyText = computed(() => {
    return 'hello'
})

const menuClicked = () => {
    isMenuShow.value = !isMenuShow.value
}
const snsClicked = () => {
    console.log('snsClicked')
}
</script>

<style lang="scss"></style>