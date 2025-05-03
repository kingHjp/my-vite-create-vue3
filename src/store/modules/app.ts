import { store } from '@/store'
import { defineStore } from 'pinia'

interface AppState {
  num: number
  isOpen: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      num: 1,
      isOpen: false
    }
  },
  getters: {
    getNum(): number {
      return this.num
    }
  },
  actions: {
    setNum(num: number) {
      this.num = num
    },
    setIsOpen(isOpen: boolean) {
      this.isOpen = isOpen
    }
  },
  persist: true
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
