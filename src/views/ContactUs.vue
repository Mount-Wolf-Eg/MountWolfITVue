<template>
  <div
    class="contact-us-sec text-center fs-1 my-5 h-100"
    style="flex-grow: 1"
    v-motion-slide-bottom
  >
    <img
      src="/src/assets/media/Images/Mask group.jpg"
      alt="screen img"
      style="
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
      "
    />
    <div class="contact-box">
      <p class="thin-label my-5">Come closer</p>
      <div>
        <form class="contact-form row mx-auto" style="width: 80%">
          <div class="d-flex flex-column col-12 col-md-6">
            <input type="text" placeholder="Name" v-model="formData.name" />
            <input type="text" placeholder="E-mail" v-model="formData.email" />
            <input
              type="text"
              placeholder="Mobile Number"
              v-model="formData.number"
            />
          </div>
          <div class="d-flex flex-column col-12 col-md-6">
            <input
              type="text"
              placeholder="Subject"
              v-model="formData.subject"
            />
            <textarea
              name="text"
              id="text"
              placeholder="Type your messages"
              v-model="formData.message"
            ></textarea>
          </div>
          <button
            class="submit-btn w-100"
            style="margin-bottom: 2rem"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const formData = ref({
  name: "",
  email: "",
  number: "",
  message: "",
  subject: "",
});
</script>
