<script setup>
import { reactive, onMounted } from "vue";

const state = reactive({
  students: [],
  images: [],
});

onMounted(async () => {
  const student_rsp = await fetch(
    "https://fakerapi.it/api/v1/persons?_quantity=20"
  );
  state.students = await student_rsp.json();

  const image_rsp = await fetch(
    "https://fakerapi.it/api/v1/images?_quantity=20&_type=kittens&_height=300"
  );
  state.images = await image_rsp.json();
});

// onMounted(async () => {
//   const data = await fetch("https://fakerapi.it/api/v1/persons?_quantity=20")
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       return json.data;
//     });

//   const images = await fetch(
//     "https://fakerapi.it/api/v1/images?_quantity=20&_type=kittens&_height=300"
//   )
//     .then((rsp) => {
//       console.log(rsp.json());
//       return rsp.json();
//     })
//     .then((json) => {
//       return json.url;
//     });
//   console.log(images);
//   state.students = data;
// });
</script>

<template>
  <div class="students">
    <div class="student">
      <div
        class="student-image"
        style="
          background-image: url('https://fastly.picsum.photos/id/274/200/300.jpg?hmac=1D3k-fgapICO1fYT7KMrtIquVz8pPybJ4ByxPwwXWRg');
        "
      ></div>
      <h4>name:111</h4>
      <h4>city:111</h4>
      <h4>phone:111</h4>
      <div class="button-container">
        <button class="details">Details</button>
        <button class="delete">Delete</button>
      </div>
    </div>

    <div class="student">
      <div
        class="student-image"
        style="
          background-image: url('https://fastly.picsum.photos/id/274/200/300.jpg?hmac=1D3k-fgapICO1fYT7KMrtIquVz8pPybJ4ByxPwwXWRg');
        "
      ></div>
      <h4>name:222</h4>
      <h4>city:222</h4>
      <h4>phone:222</h4>
      <div class="button-container">
        <button class="details">Details</button>
        <button class="delete">Delete</button>
      </div>
    </div>

    <div class="student">
      <div
        class="student-image"
        style="
          background-image: url('https://fastly.picsum.photos/id/274/200/300.jpg?hmac=1D3k-fgapICO1fYT7KMrtIquVz8pPybJ4ByxPwwXWRg');
        "
      ></div>
      <h4>name:333</h4>
      <h4>city:333</h4>
      <h4>phone:333</h4>
      <div class="button-container">
        <button class="details">Details</button>
        <button class="delete">Delete</button>
      </div>
    </div>
  </div>
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
    padding: 40px;
    margin: 10px;
    height: 400px;

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
      font-size: 16px;
      max-width: 60%;
      font-weight: normal;
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
}
</style>

<style lang="scss">
.home {
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      flex: 0 0 30%;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(201, 13, 13, 0.2);
      padding: 16px;
      margin: 8px;
      height: 360px;

      @media only screen and (max-width: 769px) {
        flex: 0 0 40%;
      }

      @media only screen and (max-width: 640px) {
        flex: 0 0 90%;
      }

      &.inBag {
        border: 1px solid #007bff;
      }

      .product-image {
        margin: 20px auto;
        width: 160px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 60%;
        font-weight: normal;
      }

      p.price {
        font-size: 20px;
        font-weight: bold;
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
}
</style>
