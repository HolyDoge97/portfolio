<template>
  <div class="layout__header">
    <div class="layout__header-left">
      <i class="icon__hamburger" @click="emits('menuClicked')" />
    </div>
    <div class="layout__header-right">
      <i class="icon__insta" @click="emits('snsClicked')" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['menuClicked', 'snsClicked']);


</script>

<style></style>