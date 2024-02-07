import { create } from 'zustand'

export const useAppStore = create((set) => ({
  Loading: true,
  googleLoginSession: false,

  setLoading: (Loading) => set({ Loading }),
  setGoogleLoginSession: (googleLoginSession) => set({ googleLoginSession })
}))