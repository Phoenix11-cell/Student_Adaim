import { defineStore } from "pinia";
import { reactive, ref, computed, onMounted } from "vue";

export const studentStore = defineStore("students", () => {
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
  return { students };
});
