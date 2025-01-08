<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-list class="avatar">
                <v-list-item 
                    prepend-avatar="https://github.com/yurimarcon/avatars/blob/main/Colored/ToyFaces_Colored_BG_49.jpg?raw=true" 
                    subtitle="ToDo List"
                    title="Bruna Nadoroski">
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list :lines="false" density="compact" nav>
                <router-link  v-for="(item, i) in items" :key="i" :to="item.to">
                    <v-list-item :value="item" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title :textContent="item.text"></v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>ToDo List</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>


<script setup>
import { ref } from 'vue'

const drawer = ref(true)

const items = [
        { text: 'Home', icon: 'mdi-folder', to: "/Home" },
        { text: 'About', icon: 'mdi-account-multiple', to: "/About" },
    ]
</script>

<style lang="sass" scoped>
@use '../../styles/settings'

a
    color: settings.$text-color-primary

    :hover
        color: #c9c9c9
</style>