<template>
      <div class="text-center pa-4">
      <v-dialog
        v-model="taskStore.showDialogCreateTask"
        min-width="325"
        max-width="600"
      >
      <v-form>
        <v-card>
            <v-card-title>Criar Item</v-card-title>
            <v-card-text>
             
              <v-select
                clearable
                label="Grupo"
                :items="taskStore.listSubheaders"
                v-model="taskStore.dscTitleCreating"
                :rules=rulesSelect
              ></v-select>
                <v-text-field :rules="rules" v-model="taskStore.dscTaskCreating" label="Item"></v-text-field>
              
            </v-card-text>
          <template v-slot:actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" @click="taskStore.addTask()" color="green" variant="elevated">
              Ok
            </v-btn>
          </template>
        </v-card>
      </v-form>
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

    return 'Você deve adicionar um item com cinco ou mais caracteres.'
  },
]
const rulesSelect = [
  value => {
    if (value) return true

    return 'Você deve adicionar um grupo para este item primeiro.'
  },
]
</script>

<style>

</style>