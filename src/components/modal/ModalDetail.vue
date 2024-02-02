<script setup>
import { studentStore } from "../../stores/studentStore";
const store = studentStore();

const currentId = store.currentStudentId;

const currentStudent = store.students.find((item) => item.id == currentId);
</script>

<template>
  <div class="container">
    <div class="top">
      <div class="photo">
        <img src="https://placekitten.com/160/140" />
      </div>
      <div class="info">
        <p>Name:</p>
        <p>Email:</p>
        <p>Birthday:</p>
        <p>Country:</p>
      </div>
    </div>

    <div class="bottom">
      <p>下半部分可以放别的</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .top {
    display: flex;
    flex: 1;
    border-bottom: 1px solid #ccc;
    .photo {
      flex: 1;
      padding: 20px;
    }
    .photo img {
      width: 160px;
      height: 140px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
}
</style>
