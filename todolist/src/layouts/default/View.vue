<template>
    <v-app id="inspire">
        <v-app-bar color="teal" image="https://picsum.photos/1920/1080?random" density="prominent">
            <template v-slot:image>

                <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>

            </template>

            <v-app-bar-title class="p-2">Lista Compras</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <Home></Home>
        </v-main>
    </v-app>
</template>


<script setup>
import Home from '@/pages/Home.vue';
</script>

<style lang="sass" scoped>
@use '../../styles/settings'

a
    color: settings.$text-color-primary

    :hover
        opacity: .8
</style>