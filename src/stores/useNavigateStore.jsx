import {create} from "zustand";

export const useNavigateStore = create((set) => ({
    settingPage: false,
    setSettingPage: (value) => set({ settingPage: value }),
    beneficiaryPage: false,
    setBeneficiaryPage: (value) => set({ beneficiaryPage: value }),

}));
