import { create } from 'zustand'

export const useAppStore = create((set) => ({
  googleLoginSession: false,
  userLogged: null,

  setGoogleLoginSession: (googleLoginSession) => set({ googleLoginSession }),
  setuserLogged: (userLogged) => set({ userLogged })
}))