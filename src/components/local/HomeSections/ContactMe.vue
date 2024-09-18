<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <div class="thin-label" style="margin: 10rem 0">Request Quote</div>
    <form class="w-50 d-flex row">
      <div class="d-flex flex-column gap-4 col">
        <input type="text" placeholder="Websites and Platforms" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Mobile Number" />
      </div>
      <div class="d-flex flex-column gap-4 col">
        <textarea
          name="text"
          id="text"
          placeholder="Type your messages"
        ></textarea>
        <button class="submit-btn" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
