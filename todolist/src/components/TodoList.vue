<template>
    <div>
        <v-text-field clearable label="Add Task" :rules="rules" v-model="taskStore.titleTaskCreating" @keyup.enter="taskStore.addTask"></v-text-field>
        <ListTasks />
    </div>
</template>

<script setup>
import { onMounted  } from 'vue';
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/store/task'

const taskStore = useTaskStore()
const rules = [
        value => {
          if (!value || value.length >= 5) return true

          return 'Você deve adicionar uma task com mais de cinco caracteres.'
        },
      ]

onMounted(() => {
    taskStore.getTasks()
})

</script>
