<template>
  <div
    class="contact-us-sec text-center fs-1 my-5 h-100"
    style="flex-grow: 1"
    v-motion-slide-bottom
  >
    <div class="contact-box">
      <p class="thin-label my-5">Come closer</p>
      <div>
        <form
          id="addForm"
          @submit.prevent="sendApplication()"
          class="contact-form row mx-auto"
          style="width: 80%"
        >
          <div class="d-flex flex-column col-12 col-md-6 ps-0">
            <span>
              <input
                type="text"
                placeholder="Name"
                v-model="formData.name"
                :class="checkErrName(['name']) ? 'err-border' : ''"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'name'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <span>
              <input
                type="text"
                placeholder="E-mail"
                v-model="formData.email"
                :class="checkErrName(['email']) ? 'err-border' : ''"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'email'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <span>
              <input
                type="text"
                placeholder="Mobile Number"
                v-model="formData.number"
                :class="checkErrName(['number']) ? 'err-border' : ''"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'number'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
          </div>
          <div class="d-flex flex-column col-12 col-md-6 pe-0">
            <span>
              <input
                type="text"
                placeholder="Subject"
                v-model="formData.subject"
                :class="checkErrName(['subject']) ? 'err-border' : ''"
              />
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'subject'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <textarea
              name="text"
              id="text"
              placeholder="Type your messages"
              v-model="formData.message"
              :class="checkErrName(['message']) ? 'err-border' : ''"
            ></textarea>
            <span
              class="center-row justify-content-start"
              style="margin-top: -1rem; margin-bottom: 1rem"
              v-for="(err, i) in validationObj.$errors"
              :key="i"
              ><span v-if="err.$property == 'message'" class="err-msg">
                {{ err.$message }}
              </span></span
            >
          </div>

          <button
            v-if="!isLoading"
            class="submit-btn py-2 py-lg-3 w-100 d-flex align-items-center justify-content-center"
            style="margin-bottom: 2rem"
            type="submit"
          >
            Send
          </button>

          <button v-else class="submit-btn py-2 py-lg-3 w-100">
            <div class="spinner-grow me-3" role="status"></div>
            <span> Loading...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useInsightsStore } from "@/stores/InsightsStore";
// validation
import useVuelidator from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  email,
  integer,
} from "@vuelidate/validators";
import { useSlidersStore } from "@/stores/dataStore";
required.$message = "Field is required";
const isLoading = ref(false);
const formData = ref({
  name: "",
  email: "",
  number: "",
  message: "",
  subject: "",
});
const validationRules = ref({
  name: { required, minLength: minLength(3), maxLength: maxLength(100) },
  email: { required, minLength: minLength(3), maxLength: maxLength(50), email },
  number: {
    required,
    minLength: minLength(7),
    maxLength: maxLength(20),
    integer,
  },

  message: {
    required,
    minLength: minLength(10),
    maxLength: maxLength(500),
  },
  subject: {
    required,
  },
});
const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};
const validationObj = useVuelidator(validationRules, formData);
const resetFormData = () => {
  formData.value = {
    subject: "",
    name: "",
    email: "",
    number: "",
    message: "",
  };
  validationObj.value.$reset();
  document.getElementById("addForm").reset();
};
const sendApplication = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useSlidersStore().sendMessage({
      project: formData.value.subject,
      name: formData.value.name,
      phone: formData.value.number,
      email: formData.value.email,
      message: formData.value.message,
      formName: "contactUs",
    });
    if (res) {
      resetFormData();
    }
  }
  isLoading.value = false;
};
onMounted(async () => {
  await useInsightsStore().SendInsight({
    url: window.location.href,
    user_agent: navigator.userAgent,
  });
});
</script>
