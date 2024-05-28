import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  count: 0,
  upCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  downCount: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  resetCount: () =>
    set({
      count: 0,
    }),
}));
