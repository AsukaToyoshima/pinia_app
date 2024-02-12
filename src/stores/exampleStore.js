import { defineStore } from "pinia";

export const useStore = defineStore('store', {
  state:() => ({
    no: '31591',
    person: {
        first_name: '太郎',
        last_name: 'テック',
        company: 'div'
      }
    }),
  getters: {
      name: (state) => state.person.last_name + state.person.first_name,
  },
  actions: {
    increment() {
      this.no++
    },
  },
});