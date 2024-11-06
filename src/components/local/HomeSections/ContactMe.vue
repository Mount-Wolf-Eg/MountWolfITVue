<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column"
    v-motion-slide-bottom
  >
    <div class="thin-label" style="margin: 10rem 0">Request Quote</div>
    <form class="contact-form row" style="width: 80%">
      <div class="d-flex flex-column col-12 col-md-6">
        <input
          type="text"
          placeholder="Websites and Platforms"
          v-model="formData.platform"
        />
        <input type="text" placeholder="Name" v-model="formData.name" />
        <input type="text" placeholder="E-mail" v-model="formData.email" />
        <input
          type="text"
          placeholder="Mobile Number"
          v-model="formData.number"
        />
      </div>
      <div class="d-flex flex-column col-12 col-md-6">
        <textarea
          name="text"
          id="text"
          placeholder="Type your messages"
          v-model="formData.message"
        ></textarea>
        <button
          class="submit-btn w-100"
          style="margin-bottom: 2rem"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const formData = ref({
  platform: "",
  name: "",
  email: "",
  number: "",
  message: "",
});
</script>

<style lang="scss" scoped></style>
