<template>
  <div id="HomePage" class="bg">
    <div>
      <div v-if="loading">Loading images, please wait...</div>
      <div class="mapContainer" v-else @click="getPositon">
        <img class="map" src="/images/map.svg" alt="Description of image" />
        <a
          class="mapButton"
          v-for="(url, key) in images"
          :key="key"
          @mouseenter="handleHover(key)"
          @mouseout="clearImage"
          :class="getButtonAnimationClass(key)"
          :style="{
            position: 'absolute',
            left: `${getPositionFromKey(key).x}px`,
            top: `${getPositionFromKey(key).y}px`,
          }"
        ></a>>
        <div
          class="imgContainer"
          v-show="imageUrl"
          :style="{
            width: '300px', // 修改图片宽度
            height: '300px', // 修改图片高度
            backgroundImage: `url('/images/pic_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            left: `${xPos}px`,
            top: `${yPos}px`,
          }"
        >
          <img
            style="width: 100%; position: absolute; pointer-events: none"
            :src="imageUrl"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-if=show_drawpage class="draw-page-overlay">
    <DrawPage :x_Pos=xPos :y_Pos=yPos style="background-color: transparent;"></DrawPage>
  </div>
</template>

<script>
import storage from "../firebase";
import DrawPage from './DrawPage.vue'
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
      console.log("mouseover triggered");
      if (!this.imageUrl) {
        // Check if the new URL is different from the current one
        this.imageLoaded = false; // Reset loading state only if the image is going to change
        this.imageUrl = this.images[key]; // Update the image URL
        const position = this.getPositionFromKey(key);
        this.xPos = position.x;
        this.yPos = position.y;
        this.hoveredKey = key;
      }
    },

    getPositionFromKey(key) {
      const parts = key.split("-");
      return { x: parseInt(parts[0], 10), y: parseInt(parts[1], 10) };
    },

    clearImage() {
      console.log("mouseleave triggered");
      this.imageUrl = null;
    },

    getPositon(event) {
      // console.log(this.images)

      const x_Pos = event.offsetX;
      const y_Pos = event.offsetY;
      // this.$router.push({ name: "Draw", params: { x_Pos, y_Pos } });
      this.show_drawpage = true;
    },

    getRandomDelay() {
      return Math.random() * 2;
    },

    getButtonAnimationClass(key) {
      return {
        'blinking': true,
        'no-blink': key === this.hoveredKey,
      };
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
}

.imgContainer {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.map {
  width: 60vw;
}

.mapButton {
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
}

.blinking {
  animation: blink 2s linear infinite;
}

.no-blink {
  animation: none;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.draw-page-overlay {
  position: fixed; /* or 'absolute' if only within a specific parent */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust color and opacity as needed */
  z-index: 1000; /* Ensure it's on top of other content */
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
