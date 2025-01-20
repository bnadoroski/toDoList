<template>
    <div>
        <div class="buttons-position">
            <v-fab :active="!hiddenAddBtn" class="btn-float me-4" icon="mdi-plus" location="bottom end"
                absolute offset size="64" color="teal-accent-4" v-click-outside="onClickOutside"
                 @click="openOptions()"></v-fab>

            <v-fab :active="!hiddenTaskBtn" class="btn-float-title me-4" icon="mdi mdi-calendar-edit-outline"
                location="bottom end" absolute offset color="light-green-darken-1" @click="openCreateTask()"></v-fab>

            <v-fab :active="!hiddenTitleBtn" class="btn-float-task me-4" icon="mdi mdi-card-plus-outline"
                location="bottom end" absolute offset color="blue-grey-lighten-2" @click="openCreateTitle()"></v-fab>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/store/task'

const taskStore = useTaskStore()

const hiddenAddBtn = ref(false);
const hiddenTitleBtn = ref(true);
const hiddenTaskBtn = ref(true);

const onClickOutside = () => {
    hiddenAddBtn.value = false
    hiddenTitleBtn.value = true
    hiddenTaskBtn.value = true
}

const openOptions = () => {
    hiddenAddBtn.value = !hiddenAddBtn.value
    hiddenTitleBtn.value = !hiddenTitleBtn.value
    hiddenTaskBtn.value = !hiddenTaskBtn.value
}

const openCreateTask = () => {
    taskStore.returnSubheaders()
    openOptions()
    taskStore.toggleCreateTask()
}

const openCreateTitle = () => {
    openOptions()
    taskStore.toggleCreateTitle()
}
</script>

<style lang="sass" scoped>
.buttons-position
    position: fixed
    bottom: 3rem
    right: .5rem
    width: auto
    transition: .5s

    .btn-float-task
        position: fixed
        right: 3rem

    .btn-float-title
        position: fixed
        bottom: 5rem
</style>