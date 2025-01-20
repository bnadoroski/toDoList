<template>
    <div class="text-center pa-4">
        <v-dialog v-model="taskStore.showDialogDeleteTitle" min-width="325" max-width="600">
            <v-card>
                <v-card-title>Deletar Grupo</v-card-title>
                <v-card-text>
                    <v-select
                        clearable
                        label="Grupo"
                        :items="taskStore.listSubheaders"
                        v-model="taskStore.dscTitleCreating"
                    ></v-select>
                </v-card-text>

                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="taskStore.toggleDeleteTitle" color="red-darken-1" variant="elevated">
                        Cancelar
                    </v-btn>
                    <v-btn @click="taskStore.deleteTitle" color="red-darken-1" variant="outlined">
                        Deletar
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/store/task'

const taskStore = useTaskStore()
</script>
