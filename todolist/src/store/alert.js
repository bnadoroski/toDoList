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
            this.text = "Item criado com sucesso!"
            this.notifyAlert()
        },
        notifyAlertCreatedTitle() {
            this.type = "success"
            this.text = "Grupo criado com sucesso!"
            this.notifyAlert()
        },
        notifyAlertDeleted() {
            this.type = "warning"
            this.text = "Item removido!"
            this.notifyAlert()
        },
        notifyAlertDeletedTitle() {
            this.type = "warning"
            this.text = "Grupo e seus itens removidos!"
            this.notifyAlert()
        },
        notifyAlertUpdated() {
            this.type = "primary"
            this.text = "Item editado com sucesso!"
            this.notifyAlert()
        }
    }
})