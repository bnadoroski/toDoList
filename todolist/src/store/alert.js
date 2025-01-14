import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
        type: "",
        text: ""
    }),
    actions: {
        notifyAlert() {
            this.showAlert = true
            setTimeout(() => {
                this.showAlert = false
            }, 3000)
        },
        notifyAlertCreated() {
            this.type = "success"
            this.text = "Task criada com sucesso!"
            this.notifyAlert()
        },
        notifyAlertDeleted() {
            this.type = "warning"
            this.text = "Task removida!"
            this.notifyAlert()
        },
        notifyAlertUpdated() {
            this.type = "primary"
            this.text = "Task editada com sucesso!"
            this.notifyAlert()
        }
    }
})