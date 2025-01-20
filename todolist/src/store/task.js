import { defineStore } from 'pinia'
import { useAlertStore } from '@/store/alert'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
        ],
        items: [
        ],
        dscTaskCreating: "",
        dscTitleCreating: "",
        listSubheaders: [],
        showDialogDeleteTitle: false,
        showDialogCreateTitle: false,
        showDialogCreateTask: false,
        showDialogDelete: false,
        showDialogTaskFields: false,
        indexTaskSelected: 0,
        alertStore: useAlertStore()
  }),
  actions: {
    returnSubheaders() {
        this.listSubheaders = this.items.filter(x => x.type === 'subheader').map(obj => { return { title: obj.title }})
    },
    addTask() {
        if(this.dscTaskCreating.length < 5 || this.dscTitleCreating === '') return
        const idxTitle = this.items.findIndex(x => x.title == this.dscTitleCreating) + 1
        this.items.splice(idxTitle, 0, {
            title: this.dscTaskCreating, group: this.items.find(x => x.title == this.dscTitleCreating).group, done: false
        })
        this.toggleCreateTask()
        this.dscTaskCreating = ""
        this.dscTitleCreating = ""
        this.saveLocalData()
        this.alertStore.notifyAlertCreated()
    },
    addTitle() {
        if(this.dscTitleCreating.length < 5) return
        this.items.push({ type: 'subheader', group: this.items.length + 1, title: this.dscTitleCreating },);
        this.toggleCreateTitle()
        this.dscTitleCreating = ""
        this.saveLocalData()
        this.alertStore.notifyAlertCreatedTitle()
        this.returnSubheaders()
    },
    toggleDelete(title) {
        this.showDialogDelete = !this.showDialogDelete
        if(title != null)
            this.indexTaskSelected = this.items.indexOf(this.items.find(x => x.title == title)) 
    },
    deleteTask() {
        this.items.splice(this.indexTaskSelected, 1)
        this.toggleDelete()
        this.saveLocalData()
        this.alertStore.notifyAlertDeleted()
    },
    deleteTitle() {
        this.toggleDeleteTitle()
        if(this.dscTitleCreating)
        {
            const idxTitle = this.items.findIndex(x => x.type === 'subheader' && x.title === this.dscTitleCreating)
            const idxnextTitle = this.items.findIndex((y, i) => y.type === 'subheader' && i > idxTitle)
            const idxEnd = idxnextTitle === -1 ? this.items.length : idxnextTitle
            this.items.splice(idxTitle, idxEnd - idxTitle)

            this.saveLocalData()
            this.alertStore.notifyAlertDeletedTitle()
            this.dscTitleCreating = ""
        }
    },
    toggleEdit(title) {
        this.showDialogTaskFields = !this.showDialogTaskFields
        if(title != null)
            this.indexTaskSelected = this.items.indexOf(this.items.find(x => x.title == title)) 
    },
    toggleCreateTitle() {
        this.showDialogCreateTitle = !this.showDialogCreateTitle
    },    
    toggleCreateTask() {
        this.showDialogCreateTask = !this.showDialogCreateTask
    },
    toggleDeleteTitle() {
        this.returnSubheaders()
        this.showDialogCreateTitle = false
        this.showDialogDeleteTitle = !this.showDialogDeleteTitle
    },
    updateTask(index) {
        this.toggleEdit(index)
        this.saveLocalData()
        this.alertStore.notifyAlertUpdated()
    },
    saveLocalData() {
        localStorage.setItem('items', JSON.stringify(this.items))
    },
    getTasks() {
        let itemsStorage = localStorage.getItem('items')
        if(itemsStorage)
            this.items = JSON.parse(itemsStorage)
    },
    toggleDoneTask(index) {
        this.items[index].done = !this.items[index].done 
        this.saveLocalData()
    },
    orderTasks() {
        //pega os grupos
        this.items.filter(x => x.type === 'subheader').sort((a, b) => {
            const nameA = a.title.toUpperCase(); 
            const nameB = b.title.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            return 0;
          }).map(item => item.group)

          //ordenar pelos grupos
          this.items.filter(x => x.group == 0 && !x.type).sort((a, b) => {
            const nameA = a.title.toUpperCase(); 
            const nameB = b.title.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            return 0;
          })

    }
  }
})