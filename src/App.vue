<script setup>
import Student from "./components/Student.vue";
import { studentStore } from "./stores/studentStore.js";
import ModalWindow from "./components/modal/ModalWindow.vue";
import ModalDetail from "./components/modal/ModalDetail.vue";
const store = studentStore();
</script>

<template>
  <Student />

  <ModalWindow v-if="store.modalIsActivate">
    <ModalDetail />
  </ModalWindow>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
