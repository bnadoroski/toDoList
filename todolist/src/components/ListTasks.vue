<template>
    <div>
        <v-list lines="three" select-strategy="leaf">
            <!-- <v-list-subheader>General</v-list-subheader> -->
             <p v-if="taskStore.tasks.length <= 0">Não há tasks criadas</p>
            <v-list-item v-for="task, index in taskStore.tasks" :key="index" :value="index" 
            @click="taskStore.toggleDoneTask(index)">

                <template v-slot:prepend="{ }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>

                <v-list-item-title v-bind:class="task.done ? 'completed-task' : '' ">{{ task.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="grey-lighten"
                                icon="mdi mdi-pencil-circle-outline"
                                variant="text" v-bind="props"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>

            </v-list-item>
        </v-list>
        <DialogTaskFields :task="taskStore.tasks[taskStore.indexTaskSelected]" />
        <DialogDelete />
    </div>
</template>

<script setup>
import DialogTaskFields from '@/components/dialogs/DialogTaskFields.vue';
import DialogDelete from '@/components/dialogs/DialogDelete.vue';
import { useTaskStore } from '@/store/task'

const taskStore = useTaskStore()
</script>

<style lang="sass" scoped>
p
    padding: 2rem
    text-align: center
    color: #b2b2b2

.completed-task
    text-decoration: line-through
</style>