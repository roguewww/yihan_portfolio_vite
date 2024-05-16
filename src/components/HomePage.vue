<template>
  <div id="HomePage" class="bg" style="font-family: 'Futura';">
    <div style="display:flex; flex-direction: row; margin:50px; position: relative;">
      <div class="icon" style="display:flex; flex-direction: row; position:fixed;" >
        <img src="/images/mapicon.svg" alt="Description of image" style="width: 50px; height: 50px; margin-right: 20px; white-space: nowrap; ">
        <p style="font-size: 1rem; color: white; font-family: 'Futura';"> Rogue& Kano </p>
      </div>
      <div class="introDiv" style="height:100vh; width:500px; border: white; position: relative; z-index: 100;">
        <div class="introText" style="font-family: 'Futura'; color: white; position: absolute; bottom: 30%;">
          <h1 class="introHeading" style="font-size: 3.5rem;" >Memorial Map</h1>
          <p style="font-size: 1rem;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
      
        </div>
        </div>
      <div v-if="loading" style="color:white;">Loading images, please wait...</div>
      <div class="mapContainer" v-else @click="getPositon">
        <img class="map" src="/images/map.svg" alt="Description of image" />
        <div
          class="c-map_dot"
          v-for="(url, key) in images"
          :key="key"œ
          @mouseenter="handleHover(key)"
          @mouseleave="clearImage"
          :style="{ 
            left: `${getPositionFromKey(key).x}px`, 
            top: `${getPositionFromKey(key).y}px`,
          }"
        >
          <!-- <p class="c-map_location" :style="{ display: hoveredKey === key ? 'block' : 'none' }">{{ key }}</p> -->
          <div class="c-map_circle" :style="{ opacity: opacity }">
            <div class="c-map_fill"
            @mouseenter="opacity = 0.5" 
            @mouseleave="opacity = 1"></div>
          </div>
        </div>
        <div
          class="imgContainer"
          v-show="imageUrl"
          :style="{
            width: '300px',
            height: '300px',
            backgroundImage: `url('/images/pic_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            left: `${xPos}px`,
            top: `${yPos}px`,
          }"
        >
          <img style="width: 100%; position: absolute; pointer-events: none" :src="imageUrl" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="show_drawpage" class="draw-page-overlay">
    <DrawPage :x_Pos="xPos" :y_Pos="yPos" style="background-color: transparent;" @close-draw-page="handleCloseDrawPage"></DrawPage>
  </div>
</template>

<script>
import storage from "../firebase";
import DrawPage from './DrawPage.vue';
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default {
  name: "HomePage",
  components: { DrawPage },
  data() {
    return {
      images: {},
      bgColor: "#f0f0f0",
      imageUrl: null,
      xPos: 0,
      yPos: 0,
      loading: true,
      imageWidth: 0,
      imageHeight: 0,
      hoveredKey: null,
      show_drawpage: false,
      opacity: 1,
    };
  },
  created() {
    this.fetchImages();
    this.show_drawpage = false;
  },
  methods: {
    handleCloseDrawPage() {
      this.show_drawpage = false;
    },
    fetchImages() {
      const imagesRef = ref(storage, "images");
      listAll(imagesRef)
        .then((res) => {
          const promises = [];
          res.items.forEach((itemRef) => {
            const promise = getDownloadURL(itemRef).then((url) => {
              const key = itemRef.name.split(".png")[0];
              this.images[key] = url;
              const img = new Image();
              img.src = url; // Preload the image
            });
            promises.push(promise);
          });
          Promise.all(promises).then(() => {
            this.loading = false; // Hide loading indicator once all images are preloaded
          });
        })
        .catch((error) => {
          console.error("Failed to load images:", error);
          this.loading = false;
        });
    },

    handleHover(key) {
      if (!this.imageUrl) {
        this.hoveredKey = key;
        this.imageUrl = this.images[key];
        const position = this.getPositionFromKey(key);
        this.xPos = position.x + 15; // Adjusted for styling
        this.yPos = position.y + 15; // Adjusted for styling
      }
    },

    getPositionFromKey(key) {
      const parts = key.split("-");
      return { x: parseInt(parts[0], 10), y: parseInt(parts[1], 10) };
    },

    clearImage() {
      this.imageUrl = null;
      this.hoveredKey = null;
    },

    getPositon(event) {
      this.show_drawpage = true;
    },
  },
};
</script>

<style scoped>
.bg {
  display: flex;
  background-image: url("/images/bg_map.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.mapContainer {
  position: relative;
  /* transform: translate(50%, 0%); */
  margin-top: 15vh;
}

.imgContainer {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.map {
  width: 60vw;
}

.c-map_dot {
  background:transparent;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  /* border: 3px solid #ff89f4; */
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
}


.c-map_circle {
  width: 15px;
  height: 15px;
  border:none;
  border-radius: 50%;
  background:none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.c-map_fill {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border:none;
  background: rgba(255, 93, 239, 0.99);
  box-shadow: 0px 0px 7px rgba(255, 93, 239, 0.99);
}

.draw-page-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
