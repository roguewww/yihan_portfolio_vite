<template>
  <div id="HomePage" class="bg">
    <div>
      <div v-if="loading">Loading images, please wait...</div>
      <div class="mapContainer" v-else @click="getPositon">
        <img class="map" src="/images/map.svg" alt="Description of image" />
        <div
          class="c-map_dot"
          v-for="(url, key) in images"
          :key="key"
          @mouseenter="handleHover(key)"
          @mouseleave="clearImage"
          :style="{ 
            left: `${getPositionFromKey(key).x}px`, 
            top: `${getPositionFromKey(key).y}px`,
          }"
        >
          <p class="c-map_location" :style="{ display: hoveredKey === key ? 'block' : 'none' }">{{ key }}</p>
          <div class="c-map_circle">
            <div class="c-map_fill"></div>
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
}

.mapContainer {
  position: relative;
  transform: translate(50%, 0%);
  margin-top: 15vh;
  border-color: tomato;
  border-style: solid;
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
  background-color: #ffffff;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  border: 3px solid #ff89f4;
  box-shadow: 0px 0px 5px rgba(255, 0, 230, 0.99);
  pointer-events: auto;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
}

.c-map_location {
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, -10px);
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  display: none; /* Initial state; toggled by Vue */
}

.c-map_circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-map_fill {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: red;
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
