<template>
  <div>
    <h1>Simple Drawing App</h1>
    <button @click="backhome">Back to home</button>
    <p>X-pos: {{ x_Pos }}</p>
    <p>Y-pos: {{ y_Pos }}</p>
    <div class="canvas-container" @mousemove="moveEraser" @mouseleave="hideEraser">
      <!-- eraser component -->
      <div v-if="isEraserActive" :style="eraserStyle" class="eraser-cursor"></div>
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
          <p>&nbsp</p>
        </div>

        <!-- 新组件 -->
        <div for="colorPicker" class="button" title="Select Color"style="border: 1px solid black; display: inline-block;">
          Select Color
          <input type="color" v-model="customPenColor">
        </div>
        <div class="pen-thickness">
          <input type="range" min="1" max="50" v-model="penThickness">
          <span>Pen/Eraser Thickness: {{ penThickness }}</span>
        </div>
        <div>
          <button @click="useCustomPen" class="button purple" title="Use Custom Pen">Save Custom Pen Pattern</button>
        </div>
        <div>
          <button class='button'
            :class="{ 'eraser-active': isEraserActive }"
            @click="toggleEraser">
            Eraser
          </button>
        </div>
        <!-- 新组件 -->
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
import { getStorage, ref, uploadBytes } from 'firebase/storage';

export default {
  name:'DrawPage',
  props:['x_Pos','y_Pos'],
  data() {
    return {
      drawing: false,
      points: [],
      isEraserActive: false,
      savedImage: null,
      ctx: null,
      penColor: 'black',
      penThickness: 2,
      customPenColor: '#000000',
      showImage: false,
      images:['/images/paintbrush_snowflake2.png','/images/paintbrush_flower.png','/images/paintbrush_snowflake2.png'],
      imageNum: 0,

      eraserStyle: {
        position: 'absolute',
        width: '20px',  // Size
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,1)', // Semi-transparent white
        pointerEvents: 'none',  // Ignore mouse events
        display: 'none',
      }

    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
  },
  methods: {
    backhome(){
      this.$router.back();
    },

    // Canvas 组件
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
      this.ctx.beginPath();
      this.ctx.moveTo(this.points[0].x, this.points[0].y);
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineWidth = this.penThickness;
      for (let i = 1; i < this.points.length; i++) {
        this.ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      this.ctx.stroke();
    },

    // 保存上传图片
    async saveDrawing(xPos, yPos) {
      const dataUrl = this.$refs.canvas.toDataURL();
      const blob = await fetch(dataUrl).then(res => res.blob());
      
      const storage = getStorage();
      const storageRef = ref(storage, `images/${xPos}-${yPos}.png`);
      
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log('Uploaded picture blob');
      }).catch((error) => {
        console.error('Upload failed:', error);
      });

      // this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
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

    useCustomPen() {
      this.penColor = this.customPenColor;
    },

    // 橡皮擦函数组件
    toggleEraser() {
      this.isEraserActive = !this.isEraserActive;
      if (this.isEraserActive) {
        this.lastColor = this.penColor;
        this.penColor = '#FFFFFF'; 
      } else {
        this.penColor = this.lastColor;
      }
    },

    moveEraser(event) {
      if (this.isEraserActive) {
        this.eraserStyle.left = `${event.clientX - 10}px`; 
        this.eraserStyle.top = `${event.clientY - 10}px`;
        this.eraserStyle.display = 'block';
      }
    },

    hideEraser() {
      this.eraserStyle.display = 'none';
    },
    
    ClearCanva(){
      this.ctx.clearRect(0,0,this.$refs.canvas.width, this.$refs.canvas.height);
    }
  }
};
</script>

<style>
.button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.red {
  background-color: red;
  color: white;
}

.blue {
  background-color: blue;
  color: white;
}

.purple{
  background-color: purple;
  color: white;
}

.button:hover {
  background-color: #ddd;
}

.button-container {
  display: flex;
  flex-direction: column;
}

.canvas-container {
  display: flex;
}

.eraser-active {
  background-color: tomato; 
}
</style>