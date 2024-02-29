import { create } from 'zustand'

export const useChartStore = create((set) => ({
  ChartStage: '',
  TotalValue: null,


  setChartTotalValue: (TotalValue) => set({ TotalValue }),
  setChartStage: (ChartStage) => set({ ChartStage }),
}))