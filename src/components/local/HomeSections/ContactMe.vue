<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column"
    v-motion-slide-bottom
  >
    <div class="thin-label" style="margin: 10rem 0">Request Quote</div>
    <form
      id="addForm"
      @submit.prevent="sendApplication()"
      class="contact-form row"
      style="width: 80%"
    >
      <div class="d-flex flex-column col-12 col-md-6">
        <span class="w-100">
          <select
            placeholder="Websites and Platforms"
            v-model="formData.platform"
            class="form-select"
            :class="checkErrName(['platform']) ? 'err-border' : ''"
          >
            <option value="" disabled selected hidden>
              Websites and Platforms
            </option>

            <option v-for="(el, j) in props.sectors" :key="j" :value="el.name">
              {{ el.name }}
            </option>
          </select>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'platform'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
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
      <div class="d-flex flex-column col-12 col-md-6">
        <textarea
          name="text"
          style="flex: 1"
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
        <button
          v-if="!isLoading"
          class="submit-btn py-2 py-lg-5 w-100 d-flex align-items-center justify-content-center"
          style="margin-bottom: 2rem"
          type="submit"
        >
          Send
        </button>
        <button v-else class="submit-btn py-2 py-lg-5 w-100">
          <div class="spinner-grow me-3" role="status"></div>
          <span> Loading...</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

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
const props = defineProps({
  sectors: {
    type: Object,
    Required: true,
    default: {},
  },
});
const formData = ref({
  platform: "",
  name: "",
  email: "",
  number: "",
  message: "",
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
  platform: {
    required,
  },
});
const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};
const validationObj = useVuelidator(validationRules, formData);
const resetFormData = () => {
  formData.value = {
    platform: "",
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
      project: formData.value.platform,
      name: formData.value.name,
      phone: formData.value.number,
      email: formData.value.email,
      message: formData.value.message,
      formName: "quote",
    });
    if (res) {
      resetFormData();
    }
  }
  isLoading.value = false;
};
</script>

<style lang="scss" scoped>
.form-select option:hover {
  background-color: yellow !important;
}
</style>
