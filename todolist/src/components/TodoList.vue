<template>
  <div >
    <ListTasks />
    <ButtonFloat/>
    <DialogCreateTask />
    <DialogCreateTitle />
    <DialogDeleteTitle />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/store/task'
import ButtonFloat from './shared/ButtonFloat.vue';
import DialogCreateTitle from '@/components/dialogs/DialogCreateTitle.vue';
import DialogCreateTask from '@/components/dialogs/DialogCreateTask.vue';
import DialogDeleteTitle from '@/components/dialogs/DialogDeleteTitle.vue';

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.getTasks()
})

</script>