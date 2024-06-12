
<template>
  <div class="layout__container">
    <div class="not-found-body">
      <span class="not-found-title">
        4<span class="not-found-title" style="color:#8e43f0">0</span>4</span>
      <div class="not-found-contents">페이지를 찾을 수 없습니다.</div>
      <br />
      <q-separator />
      <br />
      <q-btn class="not-found-button" @click="goToBackPage" label="이전 페이지로" />
    </div>
  </div>
</template>

<script setup lang="js">
import router from '@/router';

const goToBackPage = () => {
  router.go(-1)
}

</script>

<style scope lang="scss">
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .not-found-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    align-self: center;
  }

  .not-found-title {
    width: 100%;
    text-align: center;
    font-weight: 800;
    font-size: 15rem;
  }

  .not-found-contents {
    width: 100%;
    text-align: center;
    font-weight: 300;
    font-size: 2rem;
  }

  .not-found-button {
    align-self: center;
    width: 100%;
    background-color: #8e43f0;
    color: white;
    max-width: 1000px;
  }
}</style>