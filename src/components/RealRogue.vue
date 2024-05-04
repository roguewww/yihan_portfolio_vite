<template>
    <header
        id="nav"
        class="sticky-nav"
        :class="{ 'is-sticky': isSticky }">
        <div class="div-block-36">
        <a href="#" class="link-26">Ux Design</a>
        <a href="#" class="link-26">Coding</a>
        <a href="/empathy-2/home" class="link-26">Thesis</a>
        </div>
        <div
      class="div-block-37"
      :style="{
        backgroundColor: isSticky ? 'rgb(0, 0, 0)' : 'transparent',
        transform: `translate3d(${scrollX}px, 0, 0)`,
        opacity: isSticky ? 1 : 0,
      }"
    ></div>
    </header>

    <div class="div-block-49">
      <h1 class="heading-35">What's up!<br />Here is Yihan.</h1>
      <h2 class="heading-36">A UX & Web Designer.</h2>
      <h2 class="heading-36 small">
        I graduated from the Beijing University of Technology for Computer Science and Technology.<br />‍<br />Now I am a
        grad student at Pratt Institute for Communications Design.
      </h2>
    </div>
    <div class="div-block-49 down">
      <img
        src="https://assets-global.website-files.com/617eca303ba6a0d1598e1553/62756a938c951d611f028509_icons8-back-96.png"
        loading="lazy"
        width="48"
        alt=""
        class="image-114"
      />
      <h1 class="heading-37">Scroll Down to See more</h1>
    </div>
    <div>
      <div class="section-79">
        <a href="/projects/project3" class="link-block-9 w-inline-block">
          <img
            src="https://assets-global.website-files.com/617eca303ba6a0d1598e1553/62756ebc6e303f8ef4bf0451_Rectangle%20109.png"
            loading="lazy"
            width="880"
            height=""
            alt=""
            class="image-113"
          />
        </a>
        <div class="div-block-34">
          <p class="paragraph-20">Lights</p>
          <p class="paragraph-20">Ux Design</p>
        </div>
        <p class="paragraph-21">
          There are lots of crimes happened in taxis, and most of the victims are women. This app is to decline the
          possibility of crimes and make women feel more secure.
        </p>
      </div>
      <div class="section-79">
        <a href="/projects/volume-up" class="link-block-9 w-inline-block">
          <img
            src="https://assets-global.website-files.com/617eca303ba6a0d1598e1553/6331c4f7c21f6f7e8f9a7459_Frame%2013.png"
            loading="lazy"
            width="880"
            alt=""
            class="image-113"
          />
        </a>
        <div class="div-block-34">
          <p class="paragraph-20">Volume Up</p>
          <p class="paragraph-20">Ux Design</p>
        </div>
        <p class="paragraph-21">Help social anxiety group to be more relax in social situation.</p>
      </div>
      <div class="section-79">
        <a href="/projects/project1" class="link-block-9 w-inline-block">
          <img
            src="https://assets-global.website-files.com/617eca303ba6a0d1598e1553/6245b3cbe0c6e31009db84c0_%E8%B5%84%E6%BA%90%2022.png"
            loading="lazy"
            width="880"
            alt=""
            class="image-113"
          />
        </a>
        <div class="div-block-34">
          <p class="paragraph-20">Be Lazier</p>
          <p class="paragraph-20">Arduino/ Coding</p>
        </div>
        <p class="paragraph-21">
          Design this product for people who don't like get up from bed in vocation. The table can automatically move to the
          side of the bed and let people work or study on bed.
        </p>
      </div>
      <div class="section-79">
        <a href="https://mysite.pratt.edu/~ywang149/Project2/index.html" class="link-block-9 w-inline-block">
          <img
            src="https://assets-global.website-files.com/617eca303ba6a0d1598e1553/62ab8ea9c21cdb5947b6697c_map_%E7%94%BB%E6%9D%BF%201.png"
            loading="lazy"
            width="880"
            alt=""
            class="image-113"
          />
        </a>
        <div class="div-block-34">
          <p class="paragraph-20">Map for New Yorkers</p>
          <p class="paragraph-20">Participatory Design/ Coding</p>
        </div>
        <p class="paragraph-21">
          Everyone has a different impression of New York. Many people think the city is full of trash, homeless, and
          depression. Many believe that the opportunity, the challenge, and the endless options are dazzling. Through this
          interactive page, you can leave your unique impression of New York. (Repairing) (PC only)
        </p>
      </div>
      <div class="section-79">
        <a href="/empathy-2/home" class="link-block-9 w-inline-block">
          <img
            src="https://assets-global.website-files.com/617eca303ba6a0d1598e1553/638979197d2c2b2185e4e822_6421669953543_.pic_hd.jpg"
            loading="lazy"
            width="834"
            alt=""
            class="image-113"
          />
        </a>
        <div class="div-block-34">
          <p class="paragraph-20">Thesis Research: Empathy as A Design Tool</p>
          <p class="paragraph-20">Research/ Essay</p>
        </div>
        <p class="paragraph-21">
          Is empathy important or reliable to affect our life or our learning ability, or is it just a instinct of human? As
          designers, is it worth so much of our attention, or are there other ways for us to solve users' problem?
        </p>
      </div>
    </div>
  </template>
  
  <script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: "realrogue",
    setup() {
    const isSticky = ref(false);
    const scrollX = ref(0);
    const maxScrollX = 420; // Maximum translate value

    const checkScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / documentHeight);
      isSticky.value = scrollTop > 100;
      scrollX.value = scrollPercent * maxScrollX;
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll);
    });

    return { isSticky, scrollX };
  },
};

</script>
  
<style scoped>
@import url('../realrogue.css');
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Viga&display=swap");
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Holtwood+One+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baskervville:wght@400;italic@1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Handjet:wght@400;500;600;700;800;900&display=swap");


.sticky-nav {
  transition: all 0.3s ease;
  position: relative;
  top: 0;
  width: 100%;
}

.sticky-nav.is-sticky {
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.div-block-37 {
  will-change: background, transform, opacity;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  background-color: rgb(0, 0, 0);
}

</style>
  