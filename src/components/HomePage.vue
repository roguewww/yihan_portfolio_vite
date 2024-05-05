<template>
  <div id="HomePage">
    <h1>Home Page</h1>
    <div v-if="loading">Loading images, please wait...</div>
    <div v-else @click="getPositon" style="position: relative; width:100vw; height:100vh;">
      <button v-for="(url, key) in images" :key="key" 
              @mouseenter="handleHover(key)" 
              @mouseout="clearImage"
              style="position:absolute ; width: 75px; height: 75px;"
              :style="{left: `${getPositionFromKey(key).x}px`, top: `${getPositionFromKey(key).y}px`}">
        Hover Me
      </button>
      <div v-show="imageUrl" :style="{size:'10', position: 'absolute', left: `${xPos}px`, top: `${yPos}px`}">
        <img style="size:100%; position:absolute; pointer-events: none" :src="imageUrl"/>
        <!-- <div style="position: relative; bottom: 0; background-color: rgba(0, 0, 0, 0.5); color: white; padding: 2px 5px;"> -->
        <!-- X: {{ xPos }}, Y: {{ yPos }} -->
        <!-- </div> -->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import storage from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export default {
  name: 'HomePage',
  data() {
    return {
      images: {},
      imageUrl: null,
      xPos: 0,
      yPos: 0,
      loading: true,
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      const imagesRef = ref(storage, 'images');
      listAll(imagesRef)
        .then((res) => {
          const promises = [];
          res.items.forEach((itemRef) => {
            const promise = getDownloadURL(itemRef).then((url) => {
              const key = itemRef.name.split('.png')[0];
              this.images[key] = url;
              const img = new Image();
              img.src = url;  // Preload the image
            });
            promises.push(promise);
          });
          Promise.all(promises).then(() => {
            this.loading = false;  // Hide loading indicator once all images are preloaded
          });
        })
        .catch((error) => {
          console.error("Failed to load images:", error);
          this.loading = false;
        });
    },

    handleHover(key) {
    console.log('mouseover triggered')
    if (!this.imageUrl) {  // Check if the new URL is different from the current one
      this.imageLoaded = false;  // Reset loading state only if the image is going to change
      this.imageUrl = this.images[key];  // Update the image URL
      const position = this.getPositionFromKey(key);
      this.xPos = position.x;
      this.yPos = position.y;
    }
    },
    
    getPositionFromKey(key) {
      const parts = key.split('-');
      return { x: parseInt(parts[0]), y: parseInt(parts[1]) };
    },

    clearImage() {
      console.log('mouseleave triggered');
      this.imageUrl = null;
    },

    getPositon(event) {
      console.log(this.images)
      const x_Pos = event.offsetX;
      const y_Pos = event.offsetY;
      this.$router.push({ name: 'Draw', params: { x_Pos, y_Pos } });
    },

  }
}
</script>


<style scoped>
.button {
  padding: 20px; /* Applies 10 pixels of padding on all sides */
}
</style>
