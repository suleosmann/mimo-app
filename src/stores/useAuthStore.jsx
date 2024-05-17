import {create} from "zustand";

// Auth store
export const useAuthStore = create((set) => ({
    authType: "login",
    setAuthType: (type) => set({ authType: type }),
    phoneNumber: "",
    setPhoneNumber: (number) => set({ phoneNumber: number }),
    nationalId: "",
    setNationalId: (id) => set({ nationalId: id }),
    otpCode: ["", "", "", "", ""],
    setOtpCode: (code) => set({ otpCode: code }),
    pin: "",
    setPin: (pin) => set({ pin: pin }),
    openPin: false,
    setOpenPin: (open) => set({ openPin: open }),
    pinCode: ["", "", "", ""],
    setPinCode: (code) => set({ pinCode: code }),
    verified: false,
    setVerified: (value) => set({ verified: value }),
    otpVerified: false,
    setOtpVerified: (value) => set({ otpVerified: value }),
    error: "",
    setError: (error) => set({ error: error }),
  }));