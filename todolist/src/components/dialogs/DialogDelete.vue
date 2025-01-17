<template>
    <div class="text-center pa-4">
        <v-dialog v-model="taskStore.showDialogDelete" min-width="325" max-width="600" persistent>
            <v-card 
                text="Esta ação não pode ser revertida"
                title="Deseja remover essa tarefa?">
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="taskStore.toggleDelete" color="red-darken-1" variant="elevated">
                        Cancelar
                    </v-btn>
                    <v-btn @click="taskStore.deleteTask" color="red-darken-1" variant="outlined">
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