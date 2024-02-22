// useStore.ts
import { create } from "zustand";

interface State {
  count: number;
  doubleCount: number;
  increment: () => void;
}

const useStore = create<State>((set) => ({
  count: 0,
  doubleCount: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
      doubleCount: (state.count + 1) * 2,
    })),
}));

export default useStore;
