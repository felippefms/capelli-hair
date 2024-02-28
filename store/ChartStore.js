import { create } from 'zustand'

export const useChartStore = create((set) => ({
  ChartStage: '',

  setChartStage: (ChartStage) => set({ ChartStage }),
}))