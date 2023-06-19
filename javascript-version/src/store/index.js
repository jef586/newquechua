import { defineStore } from 'pinia'

export const wordStore = defineStore('word', {
  state: () => {
    return { 
        word: []
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    addnewdata(name) {
        this.word.push(name)
      },
      deleteFavorite(name) {
        this.word.splice(name);
      }
  },
})

export default wordStore