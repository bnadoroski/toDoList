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
            this.text = "Atividade criada com sucesso!"
            this.notifyAlert()
        },
        notifyAlertCreatedTitle() {
            this.type = "success"
            this.text = "Título criado com sucesso!"
            this.notifyAlert()
        },
        notifyAlertDeleted() {
            this.type = "warning"
            this.text = "Atividade removida!"
            this.notifyAlert()
        },
        notifyAlertDeletedTitle() {
            this.type = "warning"
            this.text = "Título e suas atividades removidos!"
            this.notifyAlert()
        },
        notifyAlertUpdated() {
            this.type = "primary"
            this.text = "Atividade editada com sucesso!"
            this.notifyAlert()
        }
    }
})