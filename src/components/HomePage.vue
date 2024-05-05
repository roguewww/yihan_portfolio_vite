<template>
  <div id="HomePage" class="bg">
    <div>
      <div v-if="loading">Loading images, please wait...</div>
      <div
        class="mapContainer"
        v-else
        @click="getPositon"
        style="position: relative;"
      >
        <img class="map" src="/images/map.svg" alt="Description of image" />
        <button
          class="mapButton"
          v-for="(url, key) in images"
          :key="key"
          @mouseenter="handleHover(key)"
          @mouseout="clearImage"
          :style="{
            position: 'absolute',
            left: `${getPositionFromKey(key).x}px`,
            top: `${getPositionFromKey(key).y}px`,
            animationDelay: `${getRandomDelay()}s`
          }"
        ></button>

        <div
          v-show="imageUrl"
          :style="{
            size: '10',
            position: 'absolute',
            left: `${xPos}px`,
            top: `${yPos}px`
          }"
        >
          <img
            style="size: 100%; position: absolute; pointer-events: none"
            :src="imageUrl"
          />
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default {
  name: "HomePage",
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
    };
  },
  created() {
    this.fetchImages();
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
      }
    },

    getPositionFromKey(key) {
      const parts = key.split("-");
      return { x: parseInt(parts[0]), y: parseInt(parts[1]) };
    },

    clearImage() {
      console.log("mouseleave triggered");
      this.imageUrl = null;
    },

    getPositon(event) {
      // console.log(this.images)

      const x_Pos = event.offsetX;
      const y_Pos = event.offsetY;
      this.$router.push({ name: "Draw", params: { x_Pos, y_Pos } });
    },

    getRandomDelay() {
      return Math.random() * 2;
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

.map {
  width: 60vw;
}

.mapButton {
  background-color: #fb32e7;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  border: 3px solid #ff89f4;
  box-shadow: 0px 0px 5px rgba(255, 0, 230, 0.99);
  animation: blink 2s linear infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
