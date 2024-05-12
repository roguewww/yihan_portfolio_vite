<template>
    <div class="map_bg">
        <div class="mapContainer">
            <img class="map" src="/images/map.svg"/>
        </div>
    </div>
</template>

<style scoped>
.map_bg {
  display: flex;
  background-image: url("/images/bg_map.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.map {
  width: 60vw;
}

.mapContainer {
  position: relative;
  transform: translate(50%, 0%);
  margin-top: 15vh;
  border-color: tomato;
  border-style: solid;
}

</style>