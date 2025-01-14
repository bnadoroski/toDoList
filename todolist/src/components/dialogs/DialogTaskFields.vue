<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="taskStore.showDialogTaskFields"
        min-width="400"
        max-width="600"
        persistent
      >
        <v-card>
            <v-card-title>Editar Task</v-card-title>
            <v-card-text>
                <v-text-field v-model="props.task.title" label="Título"></v-text-field>
                <v-text-field v-model="props.task.description" label="Descrição"></v-text-field>
            </v-card-text>
          <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn @click="taskStore.updateTask()" color="primary-darken-1" variant="elevated">
              Ok
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script setup>
import { defineProps } from 'vue';
import { useTaskStore } from '@/store/task'

const taskStore = useTaskStore()

const props = defineProps({
    task: Object
})

</script>  