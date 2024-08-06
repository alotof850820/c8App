// useStore.ts
import { create } from "zustand";

interface StoreState {
  clickedIndex: number | null;
  setClickedIndex: (index: number | null) => void;
  clickedX: number | null;
  setClickedX: (index: number | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  clickedIndex: null,
  setClickedIndex: (index) => set({ clickedIndex: index }),
  clickedX: null,
  setClickedX: (index) => set({ clickedX: index }),
}));

export default useStore;
