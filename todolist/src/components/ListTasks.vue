<template>
    <div>
        <v-card variant="tonal">
            <v-list lines="three" select-strategy="leaf">
                <p v-if="taskStore.items.length <= 0">Não há atividades criadas</p>
                <v-list v-else select-strategy="leaf" :items="taskStore.items">
                    <template v-slot:append="{ item }">
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

                    <template v-slot:prepend="{ item }">
                        <v-list-item-action start @click="taskStore.toggleDoneTask(item.title)">
                            <v-checkbox-btn :model-value="item.done"></v-checkbox-btn>
                        </v-list-item-action>
                    </template>

                    <template v-slot:activator="{ props }">
                        <v-btn color="grey-lighten" icon="mdi mdi-pencil-circle-outline" variant="text"
                            v-bind="props"></v-btn>
                    </template>
                </v-list>
            </v-list>
        </v-card>
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
