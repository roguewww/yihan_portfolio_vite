<template>
  <div id="HomePage" class="bg">
    <!-- <h1>Home Page</h1> -->
    <div>
      <div v-if="loading">Loading images, please wait...</div>
        <div class="mapContainer" v-else @click="getPositon" style="position: relative; ">
          <img class="map" src="/images/map.svg" alt="Description of image">
          <button class="mapButton" v-for="(url, key) in images" :key="key" 
                  @mouseenter="handleHover(key)" 
                  @mouseout="clearImage"
                  style="position:absolute ;"
                  :style="{left: `${getPositionFromKey(key).x}px`, top: `${getPositionFromKey(key).y}px`}">
            
          </button>
          <div v-show="imageUrl" :style="{size:'10', position: 'absolute', left: `${xPos}px`, top: `${yPos}px`}">
            <img style="size:100%; position:absolute; pointer-events: none" :src="imageUrl"/>
            <!-- <div style="position: relative; bottom: 0; background-color: rgba(0, 0, 0, 0.5); color: white; padding: 2px 5px;"> -->
            <!-- X: {{ xPos }}, Y: {{ yPos }} -->
            <!-- </div> -->
          </div>
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
      bgColor: '#f0f0f0',
      imageUrl: null,
      xPos: 0,
      yPos: 0,
      loading: true,
      imageWidth: 0,
      imageHeight: 0,
      animationDuration: 0,
    };
  },
  created() {
    this.fetchImages();
    this.animationDuration = `${Math.random().toFixed(2)}s`;
  console.log(this.animationDuration);
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
      // console.log(this.images)
      
      const x_Pos = event.offsetX;
      const y_Pos = event.offsetY;
      this.$router.push({ name: 'Draw', params: { x_Pos, y_Pos } });
      
    },

  }
}
</script>


<style scoped>

.bg {
  /* background-color: #000000; */
  display: flex;
  background-image: url('/images/bg_map.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;

}

.mapContainer{
  /* background-color: #022222; */
  /* flex: auto; */
  /* height:80%; */
  
  /* height:calc(1337px*0.5);
  width: calc(2300px*0.5); */
  /* height: 1337px*0.8;
  width: 2300px*0.8; */
  /* background-image: url('/images/map_Container.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; */
  position: relative; 
  transform: translate(50%, 0%); 
  margin-top: 15vh;
  
  /* right: 1vw; */
  /* width: imageWidth + 'px';
  height: imageHeight + 'px'  */
}

.map {
  width:60vw;

}

.mapButton {
  background-color: #FB32E7;
  border-radius: 50%;
  width: 13px;    /* Set the width */
  height: 13px;   /* Set the height */
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  border: 3px solid #FF89F4;
  box-shadow: 0px 0px 5px rgba(255, 0, 230, 0.99);
  animation: blink 2s linear infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
