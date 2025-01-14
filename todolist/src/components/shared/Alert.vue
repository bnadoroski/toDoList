<template>
    <div class="alert-notification">
        <v-alert class="animate__animated animate__pulse" closable :text="alertStore.text"
            :type="alertStore.type"></v-alert>
    </div>
</template>

<script setup>
import 'animate.css'
import { useAlertStore} from '@/store/alert'
const alertStore = useAlertStore()
</script>

<style lang="sass" scoped>
@use "@/styles/settings"

.alert-notification
    position: fixed
    z-index: 1
    bottom: 4rem
    width: 100%
    padding: 0 40%

    @include settings.mobile
        padding: 0 20%
</style>