<template>
    <div class="mt-2">
        <p v-if="taskStore.items.length <= 0">Adicione um item</p>
        <v-list lines="one" v-else select-strategy="classic" v-for="(task, index) in taskStore.items" :key="index"
            :value="index">

            <v-list-subheader v-if="task.type == 'subheader'">{{ task.title }}</v-list-subheader>

            <v-list-item v-else @click="taskStore.toggleDoneTask(index)">
                <template v-slot:prepend="{}">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>

                <v-list-item-title v-bind:class="task.done ? 'completed-task' : ''">{{ task.title }}</v-list-item-title>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="grey-lighten" icon="mdi mdi-pencil-circle-outline" variant="text"
                                v-bind="props"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="1" @click="taskStore.toggleEdit(item.title)">
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="taskStore.toggleDelete(item.title)">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-list-item>
        </v-list>
        <DialogTaskFields :task="taskStore.items[taskStore.indexTaskSelected]" />
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

// v-list-item-title
.completed-task
    text-decoration: line-through
</style>
