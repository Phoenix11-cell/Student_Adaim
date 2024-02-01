import { defineStore } from "pinia";
import { reactive, ref, computed, onMounted } from "vue";

export const studentStore = defineStore("students", () => {
  // 获取所有学生数据
  let students = ref([]);
  const getAllStudents = async () => {
    const students_rsp = await fetch(
      "https://fakerapi.it/api/v1/persons?_quantity=111"
    );
    const students_json = await students_rsp.json();
    students.value = students_json.data.map((item) => {
      return { ...item, image: "https://placekitten.com/160/140" };
    });
  };
  onMounted(getAllStudents);

  // Modal
  let modalIsActivate = ref(false);

  // 分页展示
  const currentPage = ref(1);
  const itemsPerPage = 20;

  const currentItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return students.value.slice(start, end);
  });
  const totalPages = computed(() => {
    return Math.ceil(students.value.length / itemsPerPage);
  });

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
    var updateStudent = students.value.filter((item) => item.id !== student.id);
    students.value = updateStudent;
  };

  

  return {
    students,
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    deleteStudent,
    modalIsActivate,
  };
});
