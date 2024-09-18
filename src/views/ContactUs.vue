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
      <div class="inputs col-6 mx-auto my-5" style="overflow: hidden">
        <!-- first -->
        <div
          class="d-flex flex-row flex-wrap justify-content-start align-items-start mb-5"
        >
          <button type="button" class="submit-btn m-2" style="flex: 0 0 48%">
            Websites and Platforms
          </button>
          <button type="button" class="submit-btn m-2" style="flex: 0 0 48%">
            Websites and Platforms
          </button>
          <button type="button" class="submit-btn m-2" style="flex: 0 0 48%">
            Websites and Platforms
          </button>
          <button type="button" class="submit-btn m-2" style="flex: 0 0 48%">
            Websites and Platforms
          </button>
        </div>
        <!-- second -->
        <div
          class="d-flex flex-row flex-wrap justify-content-start gap-3 mx-3 mb-3"
        >
          <div style="flex: 0 0 38%">
            <input
              type="text"
              placeholder="Websites and Platforms"
              class="mb-3"
            />
            <input
              type="text"
              placeholder="Websites and Platforms"
              class="mb-3"
            />
            <input
              type="text"
              placeholder="Websites and Platforms"
              class="mb-3"
            />
          </div>
          <div style="flex: 0 0 60%" class="d-flex flex-column">
            <input type="text" placeholder="Subject" class="mb-3" />

            <textarea
              name="text"
              id="text"
              class="mb-3"
              placeholder="Type your messages"
              style="flex-grow: 1"
            ></textarea>
          </div>
          <button class="submit-btn mx-1" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
