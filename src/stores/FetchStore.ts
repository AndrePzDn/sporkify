import { create } from "zustand";

interface FetchStore {
  refetch: () => void;
  setRefetch: (refetch: () => void) => void;
  reset: () => void;
}

export const useFetchStore = create<FetchStore>((set) => ({
  refetch: () => {},
  setRefetch: (refetch) => set({ refetch }),
  reset: () => set({ refetch: () => {} }),
}));
