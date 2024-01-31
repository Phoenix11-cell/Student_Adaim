<script setup>
import { reactive, onMounted, computed, ref } from "vue";
import ModalWindow from "../components/ModalWindow.vue";

const state = reactive({
  students: [],
});

const currentPage = ref(1);
const itemsPerPage = 20;

// 计算当前页的数据
const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return state.students.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(state.students.length / itemsPerPage);
});

const getAllStudents = async () => {
  const student_rsp = await fetch(
    "https://fakerapi.it/api/v1/persons?_quantity=111"
  );
  const students_json = await student_rsp.json();
  const students = students_json.data;

  state.students = students.map((item) => {
    return { ...item, image: "https://placekitten.com/160/140" };
  });
};

const prevPage = () => {
  if (currentPage.value <= 1) {
    alert("Not have more students");
  } else {
    currentPage.value = currentPage.value - 1;
  }
};

const nextPage = () => {
  if (currentPage.value >= totalPages) {
    alert("Not have more students");
  } else {
    currentPage.value = currentPage.value + 1;
  }
};

const deleteStudent = (student) => {
  var updateStudent = state.students.filter((item) => item.id !== student.id);
  state.students = updateStudent;
};

onMounted(getAllStudents);
</script>

<template>
  <div class="students">
    <div class="student" v-for="(student, idx) in currentItems" :key="idx">
      <div
        class="student-image"
        :style="{ backgroundImage: 'url(' + student.image + ')' }"
      ></div>
      <h4>{{ student.firstname + " " + student.lastname }}</h4>
      <h4>{{ student.email }}</h4>
      <h4>{{ student.phone }}</h4>
      <div class="button-container">
        <button class="details">Details</button>
        <button class="delete" @click="deleteStudent(student)">Delete</button>
      </div>
    </div>
    <div class="buttom-buttons">
      <button @click="prevPage">上一页</button>
      <label>{{ currentPage }}/{{ totalPages }}</label>
      <button @click="nextPage">下一页</button>
    </div>
  </div>
  <ModalWindow> </ModalWindow>
</template>

<style lang="scss" scoped>
.students {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .student {
    flex: 0 0 20%;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(201, 13, 13, 0.4);
    padding: 10px 60px;
    margin: 10px;
    height: 400px;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 769px) {
      flex: 0 0 40%;
    }

    @media only screen and (max-width: 640px) {
      flex: 0 0 90%;
    }

    .student-image {
      margin: 20px auto;
      width: 160px;
      height: 140px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    h4 {
      margin: 22px auto;
      font-size: 15px;
      max-width: 60%;
      font-weight: normal;
      white-space: nowrap;
      box-sizing: border-box;
      width: 100%;
    }

    .button-container {
      display: flex;

      margin: 20px;
      button {
        color: #fff;
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 100px;
        font-weight: 400;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;
        margin-right: 10px;

        &:hover {
          opacity: 0.8;
        }

        &.remove {
          background-color: transparent;
          border: none;
          color: red;
          text-decoration: underline;
        }
      }
    }
  }

  .buttom-buttons {
    width: 100%; /* 让按钮占满整个宽度 */
    margin-top: auto; /* 将按钮推到底部 */
    display: flex;
    justify-content: center; /* 水平居中按钮 */
    margin-bottom: 20px; /* 添加底部间距，根据需要调整 */
    label {
      height: 10px;
      padding: 8px 16px;
      margin-right: 10px;
    }
    button {
      color: #fff;
      background-color: #007bff;
      border: 1px solid #007bff;
      border-radius: 100px;
      font-weight: 400;
      text-align: center;
      padding: 8px 16px;
      cursor: pointer;
      margin-right: 10px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
