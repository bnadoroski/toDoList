import { defineStore } from 'pinia'
import { useAlertStore } from '@/store/alert'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
        ],
        titleTaskCreating: "",
        showDialogDelete: false,
        showDialogTaskFields: false,
        indexTaskSelected: 0,
        alertStore: useAlertStore()
  }),
  actions: {
    addTask() {
        if(this.titleTaskCreating.length <= 5) return
        this.tasks.push({
            title: this.titleTaskCreating,
            done: false
        })
        this.titleTaskCreating = ""
        this.saveLocalData()
        this.alertStore.notifyAlertCreated()
    },
    toggleDelete(index) {
        this.showDialogDelete = !this.showDialogDelete
        if(index != null)
            this.indexTaskSelected = index
    },
    deleteTask() {
        this.tasks.splice(this.indexTaskSelected, 1)
        this.toggleDelete()
        this.saveLocalData()
        this.alertStore.notifyAlertDeleted()
    },
    toggleEdit(index) {
        this.showDialogTaskFields = !this.showDialogTaskFields
        if(index != null)
            this.indexTaskSelected = index

    },
    updateTask(index) {
        this.toggleEdit(index)
        this.saveLocalData()
        this.alertStore.notifyAlertUpdated()
    },
    saveLocalData() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    getTasks() {
        let items = localStorage.getItem('tasks')
        if(items)
            this.tasks = JSON.parse(items)
    },
    toggleDoneTask(index) {
        this.tasks[index].done = !this.tasks[index].done 
        this.saveLocalData()
    }
  }
})