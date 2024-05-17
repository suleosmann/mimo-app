import {create} from "zustand";


export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    updateUser: (updatedUser) => set((state) => ({ user: { ...state.user, ...updatedUser } })),
  }));