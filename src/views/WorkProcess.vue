<template>
  <main
    v-motion-slide-bottom
    class="d-flex justify-content-between align-items-center flex-column h-100"
  >
    <div class="text-center fs-1 w-75 nav-sec">
      <article>
        <section v-for="(item, i) in headers" :key="i">
          <h2 :id="i">{{ item.headMain }}</h2>
          <h3>{{ item.headSecond }}</h3>
          <p class="main-bdy">{{ item.bdy }}</p>
          <p class="second-bdy">{{ item.mainBody }}</p>
        </section>
      </article>

      <aside>
        <div>
          <a
            v-for="(head, j) in headers"
            :key="j"
            :href="`#${j}`"
            :class="{ active: j == currentSection }"
          >
            <span style="visibility: hidden">
              {{ head.headMain }}
            </span>
          </a>
        </div>
      </aside>
    </div>

    <div class="lets-hunt">
      <div style="position: relative; width: 100%">
        <img
          src="/src/assets/media/Images/footImg.png"
          alt="footer image"
          style="position: absolute; right: 0; width: 50%; margin-right: 0.5px"
        />
        <img
          src="/src/assets/media/Images/footImg.png"
          alt="footer image"
          style="transform: scaleX(-1); width: 50%; margin-left: 0.5px"
        />
        <p>let's hunt</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
const headers = ref([
  {
    headMain: "STEP ONE",
    headSecond: "Requirement Analysis",
    bdy: "Gather and document project requirements.",
    mainBody:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum",
  },
  {
    headMain: "STEP TWO",
    headSecond: "Design",
    bdy: "Gather and document project requirements.",
    mainBody:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum",
  },
  {
    headMain: "STEP THREE",
    headSecond: "Development",
    bdy: "Gather and document project requirements.",
    mainBody:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum",
  },
  {
    headMain: "STEP Four",
    headSecond: "Testing",
    bdy: "Gather and document project requirements.",
    mainBody:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum",
  },
  {
    headMain: "STEP Five",
    headSecond: "Deployment",
    bdy: "Gather and document project requirements.",
    mainBody:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum",
  },
]);

const currentSection = ref("");
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute("id");
        }
      });
    },
    {
      rootMargin: "0px 0px -50% 0px",
    }
  );

  document.querySelectorAll("article h2").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style lang="scss" scoped>
.lets-hunt {
  position: relative;
  width: 100%;
  p {
    font-family: var(--ft-roboto);
    font-weight: bold;
    font-size: var(--fs-24);
    line-height: var(--line-s-44);
    color: var(--col-second);
    text-align: center;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.nav-sec {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  section {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    h2 {
      font-weight: 700;
      font-size: 6rem;
      line-height: 7.6rem;
      color: #fff;
    }
    h3 {
      font-weight: 700;
      font-size: 10rem;
      line-height: 17.6rem;
      color: #fff;
    }
    .main-bdy,
    .second-bdy {
      color: #939393;
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.35rem;
      width: 50%;
    }
  }
  aside {
    div {
      position: sticky;
      top: 15rem;
      right: 0;
      display: flex;
      flex-direction: column;
      border-radius: 9px;
      border: 1px solid white;
      transition: all 0.5s ease-in-out;
      a {
        width: 5px;
        margin-bottom: 5px;
      }
      a.active {
        background-color: white;
      }
    }
  }
}
</style>
