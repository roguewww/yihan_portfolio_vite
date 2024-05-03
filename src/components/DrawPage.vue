<template>
  <div>
    <h1>Simple Drawing App</h1>
    <button @click="backhome">Back to home</button>
    <p>X-pos: {{ x_Pos }}</p>
    <p>Y-pos: {{ y_Pos }}</p>
    <div class="canvas-container">
    <canvas ref="canvas" 
            width="800" 
            height="600" 
            style="border: 1px solid #000;"
            @mousedown="startDrawing"
            @mousemove="draw"
            @mouseup="endDrawing"
            @mouseleave="endDrawing">
    </canvas>
    
    <div class="button-container">
      <div>
        <button @click="saveDrawing(x_Pos,y_Pos)" class="button">Save Drawing</button>
      </div>
      <div>
        <button @click="changeColor('red')" class="button red">Red Pen</button>
      </div>
      <div>
        <button @click="changeColor('blue')" class="button blue">Blue Pen</button>
      </div>
      <div>
        <button @click="PatternPen(1)" class="button blue">Pattern Pen1</button>
      </div>
      <div>
        <button @click="PatternPen(2)" class="button blue">Pattern Pen2</button>
      </div>
      <div>
        <button @click="ClearCanva" class="button blue">Clear</button>
      </div>
    </div>
  </div>
    <div v-if="savedImage">
      <h2>Saved Image:</h2>
      <img :src="savedImage" style="max-width: 100%;" alt="Saved Drawing">
    </div>
  </div>
  
</template>

<script>
/* eslint-disable */
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import storage from '../firebase';

export default {
  name:'DrawPage',
  props:['x_Pos','y_Pos'],
  data() {
    return {
      drawing: false,
      points: [],
      savedImage: null,
      ctx: null,
      penColor: 'black',
      shouImage: false,
      images:['/images/paintbrush_snowflake2.png','/images/paintbrush_flower.png','/images/paintbrush_snowflake2.png'],
      imageNum: 0,
      lastest_image: '',
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
  },
  methods: {
    backhome(){
      this.$router.back();
    },
    startDrawing(event) {
      this.drawing = true;
      this.points = [{ x: event.offsetX, y: event.offsetY }];
    },
    draw(event) {
      if (!this.drawing) return;
      this.points.push({ x: event.offsetX, y: event.offsetY });
      this.drawOnCanvas();
      if(this.showImage){
          const img = new Image();
          img.src=this.images[this.imageNum];
          img.onload = () =>{
          this.ctx.drawImage(img, event.offsetX, event.offsetY, 20,20);
        }
      }
    },
    endDrawing() {
      this.drawing = false;
    },
    drawOnCanvas() {
      //this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.points[0].x, this.points[0].y);
      this.ctx.strokeStyle = this.penColor; // 设置画笔颜色
      for (let i = 1; i < this.points.length; i++) {
        this.ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      this.ctx.stroke();
    },
    async saveDrawing(xPos, yPos) {
      // 获取64base image
      const dataUrl = this.$refs.canvas.toDataURL();
      const blob = await fetch(dataUrl).then(res => res.blob());
      
      // Initialize Firebase Storage
      const storage = getStorage();
      const currentTime = new Date().getTime();
      console.log(currentTime)
      const storageRef = ref(storage, `images/${xPos}-${yPos}.png`);
      // Upload the image file to Firebase Storage
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log('Uploaded picture blob');
      }).catch((error) => {
        console.error('Upload failed:', error);
      });

      // Clear the canvas
      this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
    },
    changeColor(color) {
      this.showImage = false
      this.penColor = color;
    },
    PatternPen(number){
      this.changeColor('rgba(255,0,0,0)');
      this.showImage = !this.showImage;
      this.imageNum = number;
      if(!this.showImage){
        this.ctx.clearRect(0,0,this.$refs.canvas.width, this.$refs.canvas.height);
      }
    },
    ClearCanva() {
      this.ctx.clearRect(0,0,this.$refs.canvas.width, this.$refs.canvas.height);
    }
  }
};
</script>

<style>
/* 全局样式 */
.button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px; /* 调整按钮之间的间距 */
}

/* 红色按钮样式 */
.red {
  background-color: red;
  color: white;
}

/* 蓝色按钮样式 */
.blue {
  background-color: blue;
  color: white;
}

/* 鼠标悬停时的样式 */
.button:hover {
  background-color: #ddd;
}

/* 按钮容器样式 */
.button-container {
  display: flex;
  flex-direction: column;
}

.canvas-container {
  display: flex;
  
}
</style>
