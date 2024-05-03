<template>
    <div>
        <div v-if="$route.name === undefined">
            <p>404 not found</p>
            <router-link to="/homepage">
                <button>home</button>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
