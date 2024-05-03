<template>
    <div>
        <div v-if="$route.name === undefined">
            <p>404 not found</p>
            <router-link to="/homepage">
                <button class='button'>home</button>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.button{
    width:20vw;
    height:20vh;
    font-size:50px;
}
</style>

