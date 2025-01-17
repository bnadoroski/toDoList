<template>
      <div class="text-center pa-4">
      <v-dialog
        v-model="taskStore.showDialogCreateTask"
        min-width="325"
        max-width="600"
      >
        <v-card>
            <v-card-title>Criar Atividade</v-card-title>
            <v-card-text>
              <v-select
                clearable
                label="Título"
                :items="taskStore.listSubheaders"
                v-model="taskStore.dscTitleCreating"
              ></v-select>
                <v-text-field :rules="rules" v-model="taskStore.dscTaskCreating" label="Descrição"></v-text-field>
            </v-card-text>
          <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn @click="taskStore.addTask()" color="green" variant="elevated">
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
taskStore.returnSubheaders()

const rules = [
  value => {
    if (!value || value.length >= 4) return true

    return 'Você deve adicionar uma atividade com cinco ou mais caracteres.'
  },
]
</script>

<style>

</style>