<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    beforeMount() {
        if (this.$route.name === undefined) {
            this.$router.push('/homepage'); // Automatically push to /homepage if route name is undefined
        }
    }
}
</script>

<style scoped>
.button {
    width: 20vw;
    height: 20vh;
    font-size: 50px;
}
</style>
