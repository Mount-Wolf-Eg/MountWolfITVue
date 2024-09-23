<template>
  <div
    class="text-center fs-1 my-5 h-100"
    style="flex-grow: 1"
    v-motion-slide-bottom
  >
    <img
      src="/src/assets/media/Images/Mask group.jpg"
      alt="screen img"
      style="width: 100%"
    />
    <div class="contact-box">
      <p class="thin-label my-5">Come closer</p>
      <div>
        <div class="mx-auto" style="width: 60%">
          <!-- first -->
          <div div class="d-flex flex-column gap-4">
            <span class="d-flex gap-4">
              <button class="submit-btn" type="submit">
                Websites and Platforms
              </button>
              <button class="submit-btn" type="submit">
                Mobile Applications
              </button>
            </span>
            <span class="d-flex gap-4">
              <button class="submit-btn" type="submit">
                Maintenance & Support
              </button>
              <button class="submit-btn" type="submit">Other</button>
            </span>
          </div>
          <!-- second -->
          <div
            div
            class="w-100 d-flex gap-4 flex-column"
            style="margin-top: 5rem"
          >
            <span class="d-flex gap-4">
              <input type="text" placeholder="Name" style="width: 40%" />
              <input type="text" placeholder="Subject" style="width: 60%" />
            </span>
            <span class="d-flex gap-4">
              <span class="d-flex gap-4 flex-column" style="width: 40%">
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Mobile Number" />
              </span>
              <textarea
                name="text"
                id="text"
                placeholder="Type your messages"
                style="width: 60%"
              ></textarea>
            </span>
          </div>
          <button class="submit-btn mt-5" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
