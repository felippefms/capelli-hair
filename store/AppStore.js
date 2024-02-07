import { create } from 'zustand'

export const useAppStore = create((set) => ({
  googleLoginSession: false,

  setGoogleLoginSession: (googleLoginSession) => set({ googleLoginSession })
}))