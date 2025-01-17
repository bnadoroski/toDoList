<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogCreateTitle" min-width="325" max-width="600">
      <v-card>
        <v-card-title>Criar Título</v-card-title>
        <v-card-text>
          <v-text-field :rules="rules" v-model="taskStore.dscTitleCreating" label="Título"></v-text-field>
        </v-card-text>

        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="taskStore.toggleDeleteTitle()" color="red" variant="text">
            Deletar um Título
          </v-btn>
          <v-btn @click="taskStore.addTitle()" color="green" variant="elevated">
            Ok
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/store/task'

const taskStore = useTaskStore()

const rules = [
  value => {
    if (!value || value.length >= 4) return true

    return 'Você deve adicionar um título com cinco ou mais caracteres.'
  },
]
</script>
