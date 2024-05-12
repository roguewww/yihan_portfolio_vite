<template>
  <div class="Body"  style="display: flex; flex-direction:column; align-items: center;"> 
    <h1>Simple Drawing App</h1>
    <button class='button' @click="backhome">Back to home</button>
    <!-- <p>X-pos: {{ x_Pos }}</p>
    <p>Y-pos: {{ y_Pos }}</p> -->
    <div class="canvas-container" style="display: flex; flex-direction:row; justify-content: center;" @mousemove="moveEraser" @mouseleave="hideEraser">
      <!-- eraser component -->
      <div v-if="isEraserActive" :style="eraserStyle" class="eraser-cursor"></div>
      <div class="button-container">
        <div class="topbutton" style="display: flex; flex-direction:row; width:auto; padding-top: 100px; align-items: flex-start;" >
          <div class="coloum-container">
            <button @click="showPens" class="button" style="border: none; background-color: transparent; ">
            <img src="/images/feather-pen.svg" alt="Button Image" style="width: 50px; height: 50px;">

            </button>
            <div class="Pens" v-if="isPenActive" style="display: flex; align-items: center; width: 30px;">
            <button class = "colorButtons" :class="{ 'colorButtons-selected': isSelected[0] }"@click="changeColor('#1E1E1E',0)" style ="background-color:#1E1E1E;"></button>
            <button class = "colorButtons" :class="{ 'colorButtons-selected': isSelected[1] }"@click="changeColor('#F34822',1)" style ="background-color:#F34822;"></button>
            <button class = "colorButtons" :class="{ 'colorButtons-selected': isSelected[2] }"@click="changeColor('#FFA629',2)" style ="background-color:#FFA629;"></button>
            <button class = "colorButtons" :class="{ 'colorButtons-selected': isSelected[3] }"@click="changeColor('#13AE5C',3)" style ="background-color:#13AE5C;"></button>
            <button class = "colorButtons" :class="{ 'colorButtons-selected': isSelected[4] }"@click="changeColor('#0B99FF',4)" style ="background-color:#0B99FF;"></button>
            <button class = "colorButtons" :class="{ 'colorButtons-selected': isSelected[5] }"@click="changeColor('#9746FF',5)" style ="background-color:#9746FF;"></button>
            
            
            <div class="colorButtons" style="position: relative; width: 25px; height: 25px;">
              <input type="color" v-model="customPenColor" @click="openColorPicker" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;">
              <img src="/images/color-wheel.svg" alt="Button Image" style="position: absolute; top: 0; left: 0; width: 100%; height: auto; pointer-events: none;">
            </div>
            <div class="pen-thickness">
              <input type="range" min="1" max="50" v-model="penThickness">
              <span style='padding:10'>Pen/Eraser Thickness: {{ penThickness }}</span>
            </div>
  
            <div>
              <button @click="useCustomPen" class="button purple" title="Use Custom Pen">Save Custom Pen Pattern</button>
            </div>
          </div>
      </div>
          
          <div class="coloum-container">
            <button @click="showPatterns" class="button" style="border: none; background-color: transparent;">
            <img src="/images/stamp.svg" alt="Button Image" style="width: 40px; height: 40px;">
            </button>

            <div class="Patterns" v-if="isPatternActive">
              <div>
                <button @click="PatternPen(1)" class="button pattern">            
                  <img src="/images/paintbrush_flower.png" alt="Button Image" style="width: 40px; height: 40px;">
                </button>
              </div>
              <div>
                <button @click="PatternPen(2)" class="button pattern">            
                  <img src="/images/paintbrush_snowflake2.png" alt="Button Image" style="width: 40px; height: 40px;">
                </button>
              </div>
            </div>
          </div>
         

          <button class='button'
            :class="{ 'eraser-active': isEraserActive }"
            @click="toggleEraser" style="border: none; background-color: transparent;">
            <img src="/images/eraser.svg" alt="Button Image" style="width: 40px; height: 40px;">
          </button>
        </div>
      </div>

      <div class="canvabg">
        <canvas ref="canvas" 
              width="900" 
              height="700"
              @mousedown="startDrawing"
              @mousemove="draw"
              @mouseup="endDrawing"
              @mouseleave="endDrawing">
              
    </canvas>
      </div>
      

    <div class="button-container" style="padding-top: 10%;" >
          <button @click="ClearCanva" class="button blue" style="border: none; background-color: transparent; color: black; text-align: left;" >
            Clear
          </button>

          <button @click="saveDrawing(x_Pos,y_Pos)" class="button" style="border: none; background-color: transparent; color: black; text-align: left;">
            Save Drawing
          </button>
    </div>
     
    </div>
   
    <!-- <div v-if="savedImage">
      <h2>Saved Image:</h2>
      <img :src="savedImage" style="max-width: 100%;" alt="Saved Drawing">
    </div> -->
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { toggleSelectionMixin } from '../mixins';

export default {
  name:'DrawPage',
  props:['x_Pos','y_Pos'],
  mixins: [toggleSelectionMixin],
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
      isPenActive:false,
      isPatternActive:false,
      showPicker: false,
      selectedColor: '#000000',
      

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
    showPens(){
      this.isPenActive = !this.isPenActive;
      this.isPatternActive = false;
      this.isEraserActive = false;
    },
    showPatterns(){
      this.isPatternActive = !this.isPatternActive;
      this.isEraserActive = false;
      this.isPenActive = false;
      console.log("clicked")
    },
    showColorPicker() {
      this.showPicker = true;
    },
    setColor(event) {
      this.selectedColor = event.target.value;
      this.showPicker = false;
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

    openColorPicker() {
      document.getElementById('colorPicker').click();
    },

    changeColor(color,number) {
      this.showImage = false;
      this.penColor = color;
      this.toggleSelection(number);
      console.log(this.isSelected);
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
      this.showImage = false;
      this.penColor = this.customPenColor;
    },

    // 橡皮擦函数组件
    toggleEraser() {
      this.isPenActive = false;
      this.showImage = false;
      this.isPatternActive = false;
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

.body{
  width: 100vw;
  height: 100vh;

}
.coloum-container{
  display: flex; 
  flex-direction:column;
  align-items: center;

}
.colorButtons{
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 0px;
  margin-top: 5px;
  padding:0px 0px;
  display: inline-block;
  background-Image: url('/images/color-wheel.svg');
  border:none;
}
.button {
  /* padding: 10px 20px; */
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.pattern{
  border: none; 
  background-color: transparent;
}

.red {
  background-color: red;
  color: white;
}

.Pens{
  display: flex;
  flex-direction: column;
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
  align-items: stretch;
}

.canvas-container {
  display: flex;
  width:100vw;
  height:100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  border:none;
  flex: 1; 
}

.colorButtons-selected {
  /* 当按钮被选中时的样式 */
  background-color: #ff0000; /* 修改背景颜色 */
  box-shadow: 0 0 0 2px #ff89f4; 
  margin-bottom:5px;
}

.eraser-active {
  background-color: tomato; 
}

.custom-color-picker {
  width:20px !important;
  height:20px !important;
  border-radius:50%;
  margin:0px;
  padding:0px;
  appearance: none !important;
  background-color:transparent !important ;
  background-image:url("/images/color-wheel.png");
  
}

.canvabg{
  background-image:url("/images/pic_bg.png");
  background-repeat:no-repeat;
  background-size:contain;
}


</style>