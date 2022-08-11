import { defineStore, acceptHMRUpdate } from 'pinia'
import { lkz } from '../types/user'
// import

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'lkz',
    isAdmin: true
  }),
  actions: {
    logout () {
      this.$patch({
        name: '',
        isAdmin: false
      })
    },
    login (user: lkz) {
      this.$patch({
        name: user.name,
        isAdmin: user.isAdmin
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
