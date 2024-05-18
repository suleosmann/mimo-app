import {create} from "zustand";

export const useWalletStore = create((set) => ({
    topDone: false,
    setTopDone: (value) => set({ topDone: value }),
}));
